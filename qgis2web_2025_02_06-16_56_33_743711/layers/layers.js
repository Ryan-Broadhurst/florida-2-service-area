ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-9406405.042055, 3104029.801827, -8882938.055893, 3392477.284481]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ServiceAreaandcommunities_1 = new ol.format.GeoJSON();
var features_ServiceAreaandcommunities_1 = format_ServiceAreaandcommunities_1.readFeatures(json_ServiceAreaandcommunities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceAreaandcommunities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaandcommunities_1.addFeatures(features_ServiceAreaandcommunities_1);
var lyr_ServiceAreaandcommunities_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaandcommunities_1, 
                style: style_ServiceAreaandcommunities_1,
                popuplayertitle: 'Service Area and communities',
                interactive: true,
    title: 'Service Area and communities<br />\
    <img src="styles/legend/ServiceAreaandcommunities_1_0.png" /> City of Largo<br />\
    <img src="styles/legend/ServiceAreaandcommunities_1_1.png" /> City of St Petersburg<br />\
    <img src="styles/legend/ServiceAreaandcommunities_1_2.png" /> Clearwater<br />\
    <img src="styles/legend/ServiceAreaandcommunities_1_3.png" /> Dunedin<br />\
    <img src="styles/legend/ServiceAreaandcommunities_1_4.png" /> Gulf Coast<br />\
    <img src="styles/legend/ServiceAreaandcommunities_1_5.png" /> Hillsbourough County<br />\
    <img src="styles/legend/ServiceAreaandcommunities_1_6.png" /> Sarasota County<br />\
    <img src="styles/legend/ServiceAreaandcommunities_1_7.png" /> Tampa<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ServiceAreaandcommunities_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ServiceAreaandcommunities_1];
lyr_ServiceAreaandcommunities_1.set('fieldAliases', {'year': 'year', 'ste_code': 'ste_code', 'ste_name': 'ste_name', 'coty_code': 'coty_code', 'coty_name': 'coty_name', 'zcta5_code': 'zcta5_code', 'zcta5_name': 'zcta5_name', 'zcta5_area_': 'zcta5_area_', 'zcta5_type': 'zcta5_type', 'zcta5_name_': 'zcta5_name_', 'zcta5_fp_co': 'zcta5_fp_co', 'zcta5_gnis_': 'zcta5_gnis_', 'SS Zip Codes and Communities - Playground (1)_Service area name': 'SS Zip Codes and Communities - Playground (1)_Service area name', 'SS Zip Codes and Communities - Playground (1)_color': 'SS Zip Codes and Communities - Playground (1)_color', });
lyr_ServiceAreaandcommunities_1.set('fieldImages', {'year': 'TextEdit', 'ste_code': 'TextEdit', 'ste_name': 'TextEdit', 'coty_code': 'TextEdit', 'coty_name': 'TextEdit', 'zcta5_code': 'TextEdit', 'zcta5_name': 'TextEdit', 'zcta5_area_': 'TextEdit', 'zcta5_type': 'TextEdit', 'zcta5_name_': 'TextEdit', 'zcta5_fp_co': 'TextEdit', 'zcta5_gnis_': 'TextEdit', 'SS Zip Codes and Communities - Playground (1)_Service area name': 'TextEdit', 'SS Zip Codes and Communities - Playground (1)_color': 'TextEdit', });
lyr_ServiceAreaandcommunities_1.set('fieldLabels', {'year': 'hidden field', 'ste_code': 'hidden field', 'ste_name': 'hidden field', 'coty_code': 'hidden field', 'coty_name': 'hidden field', 'zcta5_code': 'header label - visible with data', 'zcta5_name': 'hidden field', 'zcta5_area_': 'hidden field', 'zcta5_type': 'hidden field', 'zcta5_name_': 'hidden field', 'zcta5_fp_co': 'hidden field', 'zcta5_gnis_': 'hidden field', 'SS Zip Codes and Communities - Playground (1)_Service area name': 'header label - visible with data', 'SS Zip Codes and Communities - Playground (1)_color': 'hidden field', });
lyr_ServiceAreaandcommunities_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});