import * as shapefile from 'shapefile'
import * as turf from '@turf/turf'

async function loadGeoJSON() {
    try {
        const geoData = await shapefile.read('/Users/seoki/Desktop/ZupStar/src/config/coast/coast.shp')
        const check1 = geoData.features[123].geometry.coordinates
        console.log(check1)
        // for (const feature of geoData.features) {
        //     console.log(feature)
        // }
        // return geoData.features
    } catch (error) {
        console.error('Error loading shapefile:', error)
    }
}

loadGeoJSON()

function isNearCoast(userLocation, coastFeatures, thresholdMeters = 50) {
    const userPoint = turf.point(userLocation)

    for (const feature of coastFeatures) {
        if (!feature || !feature.geometry || !Array.isArray(feature.geometry.coordinates)) {
            continue
        }

        const lineType = feature.geometry.type

        if (lineType === 'LineString') {
            try {
                const distance = turf.pointToLineDistance(userPoint, feature, { units: 'meters' })
                if (distance <= thresholdMeters) {
                    return true
                }
            } catch (err) {
                console.warn(err.message)
                continue
            }
        }

        if (lineType === 'MultiLineString') {
            for (const coordGroup of feature.geometry.coordinates) {
                if (!Array.isArray(coordGroup)) continue

                try {
                    const isNested = Array.isArray(coordGroup[0]) && Array.isArray(coordGroup[0][0])

                    if (isNested) {
                        for (const innerCoords of coordGroup) {
                            const lineFeature = turf.lineString(innerCoords)
                            const distance = turf.pointToLineDistance(userPoint, lineFeature, { units: 'meters' })
                            if (distance <= thresholdMeters) {
                                return true
                            }
                        }
                    } else {
                        const lineFeature = turf.lineString(coordGroup)
                        const distance = turf.pointToLineDistance(userPoint, lineFeature, { units: 'meters' })
                        if (distance <= thresholdMeters) {
                            return true
                        }
                    }
                } catch (err) {
                    console.warn('Invalid MultiLineString geometry skipped:', err.message)
                    continue
                }
            }
        }
    }

    return false
}

async function checkCoast() {
    const coastFeatures = await loadGeoJSON()
    const myLocation = [126.978, 37.5665] // 예: 서울 위도/경도
    const coastLocation = [37.447154, 126.372647]

    const result = isNearCoast(myLocation, coastFeatures)

    if (result) {
        console.log('현재 위치는 해안 근처입니다.')
    } else {
        console.log('현재 위치는 해안과 멀리 떨어져 있습니다.')
    }
}

// await checkCoast()
