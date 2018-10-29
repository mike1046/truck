import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Mapbox, { MapView } from '@mapbox/react-native-mapbox-gl'

Mapbox.setAccessToken('pk.eyJ1IjoibW9iaWxlZGV2Nzc1IiwiYSI6ImNqNXFyMnBhczBvM3kyd211M3dtZTh4ejQifQ.DA8_iVN0ijZKD4plfd-pOw')


export default class Mapview extends Component {
    constructor(props){
        super(props)
        this.state = {
            annotations:[{
                coordinates: [[34.0522, -118.2437]],
                type: 'polyline',
                storkeColor: '#00ff00',
                storkeWidth: 2,
                id: 'driver path'
            }],
            zoom: 16
        }

    }

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:300}}>
                    <MapView
                        ref={map => { this._map = map; }}
                        style={{flex:1}}
                        initialCenterCoordinate={{latitude:34.0532, longitude:-118.2450}}
                        initialZoomLevel={this.state.zoom}
                        initialDirection={0}
                        rotateEnabled={false}
                        scrollEnabled={true}
                        zoomEnabled={true}
                        showsUserLocation={true}
                        userLocationVisible={true}
                        styleURL={Mapbox.mapStyles.streets}
                        userTrackingMode={Mapbox.userTrackingMode.none}
                        annotations={this.state.annotations}
                    >
                    </MapView>
                </View>
            </View>
        )
    }

}