var wms_layers = [];


        var lyr_StamenTerrainBackground_0 = new ol.layer.Tile({
            'title': 'Stamen Terrain Background',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://a.tile.stamen.com/terrain-background/{z}/{x}/{y}.png'
            })
        });
var format_pl_tambon_1 = new ol.format.GeoJSON();
var features_pl_tambon_1 = format_pl_tambon_1.readFeatures(json_pl_tambon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_tambon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_tambon_1.addFeatures(features_pl_tambon_1);
var lyr_pl_tambon_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_tambon_1, 
                style: style_pl_tambon_1,
                interactive: true,
                title: '<img src="styles/legend/pl_tambon_1.png" /> pl_tambon'
            });
var format_pl_amphoe_2 = new ol.format.GeoJSON();
var features_pl_amphoe_2 = format_pl_amphoe_2.readFeatures(json_pl_amphoe_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_amphoe_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_amphoe_2.addFeatures(features_pl_amphoe_2);
var lyr_pl_amphoe_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_amphoe_2, 
                style: style_pl_amphoe_2,
                interactive: true,
                title: '<img src="styles/legend/pl_amphoe_2.png" /> pl_amphoe'
            });
var format_pl_stream_3 = new ol.format.GeoJSON();
var features_pl_stream_3 = format_pl_stream_3.readFeatures(json_pl_stream_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_stream_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_stream_3.addFeatures(features_pl_stream_3);
var lyr_pl_stream_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_stream_3, 
                style: style_pl_stream_3,
                interactive: true,
                title: '<img src="styles/legend/pl_stream_3.png" /> pl_stream'
            });
var format_pl_village_4 = new ol.format.GeoJSON();
var features_pl_village_4 = format_pl_village_4.readFeatures(json_pl_village_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pl_village_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pl_village_4.addFeatures(features_pl_village_4);
var lyr_pl_village_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pl_village_4, 
                style: style_pl_village_4,
                interactive: true,
                title: '<img src="styles/legend/pl_village_4.png" /> pl_village'
            });

lyr_StamenTerrainBackground_0.setVisible(true);lyr_pl_tambon_1.setVisible(true);lyr_pl_amphoe_2.setVisible(true);lyr_pl_stream_3.setVisible(true);lyr_pl_village_4.setVisible(true);
var layersList = [lyr_StamenTerrainBackground_0,lyr_pl_tambon_1,lyr_pl_amphoe_2,lyr_pl_stream_3,lyr_pl_village_4];
lyr_pl_tambon_1.set('fieldAliases', {'AREA': 'AREA', 'TAM_CODE': 'TAM_CODE', 'TAM_NAM_T': 'TAM_NAM_T', 'AMP_CODE': 'AMP_CODE', 'AMP_NAM_T': 'AMP_NAM_T', 'AMP_NAM_E': 'AMP_NAM_E', });
lyr_pl_amphoe_2.set('fieldAliases', {'AREA': 'AREA', 'AMP_CODE': 'AMP_CODE', 'AMP_NAM_T': 'AMP_NAM_T', 'AMP_NAM_E': 'AMP_NAM_E', 'PROV_CODE': 'PROV_CODE', });
lyr_pl_stream_3.set('fieldAliases', {'LENGTH': 'LENGTH', 'STR_ID': 'STR_ID', 'STR_NAM_T': 'STR_NAM_T', 'STR_NAM_E': 'STR_NAM_E', 'LOCAL_NAM': 'LOCAL_NAM', 'STR_TYPE': 'STR_TYPE', });
lyr_pl_village_4.set('fieldAliases', {'NRD_CODE': 'NRD_CODE', 'VILL_CODE': 'VILL_CODE', 'VILL_NAM_T': 'VILL_NAM_T', 'PROV_CODE': 'PROV_CODE', 'AMP_CODE': 'AMP_CODE', 'TAM_CODE': 'TAM_CODE', });
lyr_pl_tambon_1.set('fieldImages', {'AREA': '', 'TAM_CODE': '', 'TAM_NAM_T': '', 'AMP_CODE': '', 'AMP_NAM_T': '', 'AMP_NAM_E': '', });
lyr_pl_amphoe_2.set('fieldImages', {'AREA': '', 'AMP_CODE': '', 'AMP_NAM_T': '', 'AMP_NAM_E': '', 'PROV_CODE': '', });
lyr_pl_stream_3.set('fieldImages', {'LENGTH': 'TextEdit', 'STR_ID': 'TextEdit', 'STR_NAM_T': 'TextEdit', 'STR_NAM_E': 'TextEdit', 'LOCAL_NAM': 'TextEdit', 'STR_TYPE': 'TextEdit', });
lyr_pl_village_4.set('fieldImages', {'NRD_CODE': 'TextEdit', 'VILL_CODE': 'TextEdit', 'VILL_NAM_T': 'TextEdit', 'PROV_CODE': 'TextEdit', 'AMP_CODE': 'TextEdit', 'TAM_CODE': 'TextEdit', });
lyr_pl_tambon_1.set('fieldLabels', {'AREA': 'no label', 'TAM_CODE': 'no label', 'TAM_NAM_T': 'no label', 'AMP_CODE': 'no label', 'AMP_NAM_T': 'no label', 'AMP_NAM_E': 'no label', });
lyr_pl_amphoe_2.set('fieldLabels', {'AREA': 'no label', 'AMP_CODE': 'no label', 'AMP_NAM_T': 'header label', 'AMP_NAM_E': 'no label', 'PROV_CODE': 'no label', });
lyr_pl_stream_3.set('fieldLabels', {'LENGTH': 'no label', 'STR_ID': 'no label', 'STR_NAM_T': 'no label', 'STR_NAM_E': 'no label', 'LOCAL_NAM': 'no label', 'STR_TYPE': 'no label', });
lyr_pl_village_4.set('fieldLabels', {'NRD_CODE': 'no label', 'VILL_CODE': 'no label', 'VILL_NAM_T': 'no label', 'PROV_CODE': 'no label', 'AMP_CODE': 'no label', 'TAM_CODE': 'no label', });
lyr_pl_village_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});