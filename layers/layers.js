ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-38.517831, -3.720546, -38.453778, -3.685045]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_reasUrbanaseRurais_1 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_1 = format_reasUrbanaseRurais_1.readFeatures(json_reasUrbanaseRurais_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasUrbanaseRurais_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_1.addFeatures(features_reasUrbanaseRurais_1);
var lyr_reasUrbanaseRurais_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_1, 
                style: style_reasUrbanaseRurais_1,
                popuplayertitle: 'Áreas Urbanas e Rurais',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_1.png" /> Áreas Urbanas e Rurais'
            });
var format_FundeadourosLongoPrazo_2 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_2 = format_FundeadourosLongoPrazo_2.readFeatures(json_FundeadourosLongoPrazo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosLongoPrazo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_2.addFeatures(features_FundeadourosLongoPrazo_2);
var lyr_FundeadourosLongoPrazo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_2, 
                style: style_FundeadourosLongoPrazo_2,
                popuplayertitle: 'Fundeadouros - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_2.png" /> Fundeadouros - Longo Prazo'
            });
var format_FundeadourosMdioPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_3 = format_FundeadourosMdioPrazo_3.readFeatures(json_FundeadourosMdioPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosMdioPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_3.addFeatures(features_FundeadourosMdioPrazo_3);
var lyr_FundeadourosMdioPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_3, 
                style: style_FundeadourosMdioPrazo_3,
                popuplayertitle: 'Fundeadouros - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_3.png" /> Fundeadouros - Médio Prazo'
            });
var format_FundeadourosCurtoPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_4 = format_FundeadourosCurtoPrazo_4.readFeatures(json_FundeadourosCurtoPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosCurtoPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_4.addFeatures(features_FundeadourosCurtoPrazo_4);
var lyr_FundeadourosCurtoPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_4, 
                style: style_FundeadourosCurtoPrazo_4,
                popuplayertitle: 'Fundeadouros - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_4.png" /> Fundeadouros - Curto Prazo'
            });
var format_FundeadourosSituaoAtual_5 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_5 = format_FundeadourosSituaoAtual_5.readFeatures(json_FundeadourosSituaoAtual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_FundeadourosSituaoAtual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_5.addFeatures(features_FundeadourosSituaoAtual_5);
var lyr_FundeadourosSituaoAtual_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_5, 
                style: style_FundeadourosSituaoAtual_5,
                popuplayertitle: 'Fundeadouros - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_5.png" /> Fundeadouros - Situação Atual'
            });
var format_BaciasdeEvoluoLongoPrazo_6 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_6 = format_BaciasdeEvoluoLongoPrazo_6.readFeatures(json_BaciasdeEvoluoLongoPrazo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoLongoPrazo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_6.addFeatures(features_BaciasdeEvoluoLongoPrazo_6);
var lyr_BaciasdeEvoluoLongoPrazo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_6, 
                style: style_BaciasdeEvoluoLongoPrazo_6,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_6.png" /> Bacias de Evolução - Longo Prazo'
            });
var format_BaciasdeEvoluoMdioPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_7 = format_BaciasdeEvoluoMdioPrazo_7.readFeatures(json_BaciasdeEvoluoMdioPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoMdioPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_7.addFeatures(features_BaciasdeEvoluoMdioPrazo_7);
var lyr_BaciasdeEvoluoMdioPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_7, 
                style: style_BaciasdeEvoluoMdioPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_7.png" /> Bacias de Evolução - Médio Prazo'
            });
var format_BaciasdeEvoluoCurtoPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_8 = format_BaciasdeEvoluoCurtoPrazo_8.readFeatures(json_BaciasdeEvoluoCurtoPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_8.addFeatures(features_BaciasdeEvoluoCurtoPrazo_8);
var lyr_BaciasdeEvoluoCurtoPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_8, 
                style: style_BaciasdeEvoluoCurtoPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_8.png" /> Bacias de Evolução - Curto Prazo'
            });
var format_BaciasdeEvoluoSituaoAtual_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_9 = format_BaciasdeEvoluoSituaoAtual_9.readFeatures(json_BaciasdeEvoluoSituaoAtual_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BaciasdeEvoluoSituaoAtual_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_9.addFeatures(features_BaciasdeEvoluoSituaoAtual_9);
var lyr_BaciasdeEvoluoSituaoAtual_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_9, 
                style: style_BaciasdeEvoluoSituaoAtual_9,
                popuplayertitle: 'Bacias de Evolução - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_9.png" /> Bacias de Evolução - Situação Atual'
            });
var format_CanaisdeAcessoLongoPrazo_10 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_10 = format_CanaisdeAcessoLongoPrazo_10.readFeatures(json_CanaisdeAcessoLongoPrazo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoLongoPrazo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_10.addFeatures(features_CanaisdeAcessoLongoPrazo_10);
var lyr_CanaisdeAcessoLongoPrazo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_10, 
                style: style_CanaisdeAcessoLongoPrazo_10,
                popuplayertitle: 'Canais de Acesso - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_10.png" /> Canais de Acesso - Longo Prazo'
            });
var format_CanaisdeAcessoMdioPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_11 = format_CanaisdeAcessoMdioPrazo_11.readFeatures(json_CanaisdeAcessoMdioPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoMdioPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_11.addFeatures(features_CanaisdeAcessoMdioPrazo_11);
var lyr_CanaisdeAcessoMdioPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_11, 
                style: style_CanaisdeAcessoMdioPrazo_11,
                popuplayertitle: 'Canais de Acesso - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_11.png" /> Canais de Acesso - Médio Prazo'
            });
var format_CanaisdeAcessoCurtoPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_12 = format_CanaisdeAcessoCurtoPrazo_12.readFeatures(json_CanaisdeAcessoCurtoPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoCurtoPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_12.addFeatures(features_CanaisdeAcessoCurtoPrazo_12);
var lyr_CanaisdeAcessoCurtoPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_12, 
                style: style_CanaisdeAcessoCurtoPrazo_12,
                popuplayertitle: 'Canais de Acesso - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_12.png" /> Canais de Acesso - Curto Prazo'
            });
var format_CanaisdeAcessoSituaoAtual_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_13 = format_CanaisdeAcessoSituaoAtual_13.readFeatures(json_CanaisdeAcessoSituaoAtual_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CanaisdeAcessoSituaoAtual_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_13.addFeatures(features_CanaisdeAcessoSituaoAtual_13);
var lyr_CanaisdeAcessoSituaoAtual_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_13, 
                style: style_CanaisdeAcessoSituaoAtual_13,
                popuplayertitle: 'Canais de Acesso - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_13.png" /> Canais de Acesso - Situação Atual'
            });
var format_AcessosDutoviriosExternos_14 = new ol.format.GeoJSON();
var features_AcessosDutoviriosExternos_14 = format_AcessosDutoviriosExternos_14.readFeatures(json_AcessosDutoviriosExternos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosDutoviriosExternos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosExternos_14.addFeatures(features_AcessosDutoviriosExternos_14);
var lyr_AcessosDutoviriosExternos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosExternos_14, 
                style: style_AcessosDutoviriosExternos_14,
                popuplayertitle: 'Acessos Dutoviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosExternos_14.png" /> Acessos Dutoviários Externos'
            });
var format_AcessosFerroviriosInternosLongoPrazo_15 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_15 = format_AcessosFerroviriosInternosLongoPrazo_15.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_15.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_15);
var lyr_AcessosFerroviriosInternosLongoPrazo_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_15, 
                style: style_AcessosFerroviriosInternosLongoPrazo_15,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_15.png" /> Acessos Ferroviários Internos - Longo Prazo'
            });
var format_AcessosFerroviriosInternosMdioPrazo_16 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_16 = format_AcessosFerroviriosInternosMdioPrazo_16.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_16.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_16);
var lyr_AcessosFerroviriosInternosMdioPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_16, 
                style: style_AcessosFerroviriosInternosMdioPrazo_16,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_16.png" /> Acessos Ferroviários Internos - Médio Prazo'
            });
var format_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_17 = format_AcessosFerroviriosInternosCurtoPrazo_17.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_17.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_17);
var lyr_AcessosFerroviriosInternosCurtoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_17, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_17.png" /> Acessos Ferroviários Internos - Curto Prazo'
            });
var format_AcessosFerroviriosInternosSituaoAtual_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_18 = format_AcessosFerroviriosInternosSituaoAtual_18.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_18.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_18);
var lyr_AcessosFerroviriosInternosSituaoAtual_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_18, 
                style: style_AcessosFerroviriosInternosSituaoAtual_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_18.png" /> Acessos Ferroviários Internos - Situação Atual'
            });
var format_AcessosFerroviriosExternos_19 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_19 = format_AcessosFerroviriosExternos_19.readFeatures(json_AcessosFerroviriosExternos_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosFerroviriosExternos_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_19.addFeatures(features_AcessosFerroviriosExternos_19);
var lyr_AcessosFerroviriosExternos_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_19, 
                style: style_AcessosFerroviriosExternos_19,
                popuplayertitle: 'Acessos Ferroviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_19.png" /> Acessos Ferroviários Externos'
            });
var format_AcessosRodoviriosInternosLongoPrazo_20 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_20 = format_AcessosRodoviriosInternosLongoPrazo_20.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_20.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_20);
var lyr_AcessosRodoviriosInternosLongoPrazo_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_20, 
                style: style_AcessosRodoviriosInternosLongoPrazo_20,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_20.png" /> Acessos Rodoviários Internos - Longo Prazo'
            });
var format_AcessosRodoviriosInternosMdioPrazo_21 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_21 = format_AcessosRodoviriosInternosMdioPrazo_21.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_21.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_21);
var lyr_AcessosRodoviriosInternosMdioPrazo_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_21, 
                style: style_AcessosRodoviriosInternosMdioPrazo_21,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_21.png" /> Acessos Rodoviários Internos - Médio Prazo'
            });
var format_AcessosRodoviriosInternosCurtoPrazo_22 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_22 = format_AcessosRodoviriosInternosCurtoPrazo_22.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_22.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_22);
var lyr_AcessosRodoviriosInternosCurtoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_22, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_22,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_22.png" /> Acessos Rodoviários Internos - Curto Prazo'
            });
var format_AcessosRodoviriosInternosSituaoAtual_23 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_23 = format_AcessosRodoviriosInternosSituaoAtual_23.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_23.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_23);
var lyr_AcessosRodoviriosInternosSituaoAtual_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_23, 
                style: style_AcessosRodoviriosInternosSituaoAtual_23,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_23.png" /> Acessos Rodoviários Internos - Situação Atual'
            });
var format_AcessosRodoviriosExternos_24 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_24 = format_AcessosRodoviriosExternos_24.readFeatures(json_AcessosRodoviriosExternos_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcessosRodoviriosExternos_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_24.addFeatures(features_AcessosRodoviriosExternos_24);
var lyr_AcessosRodoviriosExternos_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_24, 
                style: style_AcessosRodoviriosExternos_24,
                popuplayertitle: 'Acessos Rodoviários Externos',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_24.png" /> Acessos Rodoviários Externos'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29 = format_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29.readFeatures(json_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29.addFeatures(features_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29);
var lyr_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29, 
                style: style_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias em  Exploração Indireta - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29.png" /> Áreas Afetas às Operações Portuárias em  Exploração Indireta - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual'
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32);
cluster_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32
});
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32 = new ol.layer.Vector({
                declutter: false,
                source:cluster_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta (Salas) - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta (Salas) - Situação Atual'
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_33 = format_reasNoAfetassOperaesPorturiasLongoPrazo_33.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_33.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_33);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_33, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_33.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo'
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_34 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_34 = format_reasNoAfetassOperaesPorturiasMdioPrazo_34.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_34.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_34);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_34, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_34,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_34.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo'
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_35.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_35.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_35);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_35, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_35,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_35.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo'
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_36 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_36 = format_reasNoAfetassOperaesPorturiasSituaoAtual_36.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_36.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_36);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_36, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_36,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_36.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual'
            });
var format_AcostagemLongoPrazo_37 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_37 = format_AcostagemLongoPrazo_37.readFeatures(json_AcostagemLongoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemLongoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_37.addFeatures(features_AcostagemLongoPrazo_37);
var lyr_AcostagemLongoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_37, 
                style: style_AcostagemLongoPrazo_37,
                popuplayertitle: 'Acostagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_37.png" /> Acostagem - Longo Prazo'
            });
var format_AcostagemMdioPrazo_38 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_38 = format_AcostagemMdioPrazo_38.readFeatures(json_AcostagemMdioPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemMdioPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_38.addFeatures(features_AcostagemMdioPrazo_38);
var lyr_AcostagemMdioPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_38, 
                style: style_AcostagemMdioPrazo_38,
                popuplayertitle: 'Acostagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_38.png" /> Acostagem - Médio Prazo'
            });
var format_AcostagemCurtoPrazo_39 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_39 = format_AcostagemCurtoPrazo_39.readFeatures(json_AcostagemCurtoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemCurtoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_39.addFeatures(features_AcostagemCurtoPrazo_39);
var lyr_AcostagemCurtoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_39, 
                style: style_AcostagemCurtoPrazo_39,
                popuplayertitle: 'Acostagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_39.png" /> Acostagem - Curto Prazo'
            });
var format_AcostagemSituaoAtual_40 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_40 = format_AcostagemSituaoAtual_40.readFeatures(json_AcostagemSituaoAtual_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AcostagemSituaoAtual_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_40.addFeatures(features_AcostagemSituaoAtual_40);
var lyr_AcostagemSituaoAtual_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_40, 
                style: style_AcostagemSituaoAtual_40,
                popuplayertitle: 'Acostagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_40.png" /> Acostagem - Situação Atual'
            });
var format_TerminaisdePassageirosLongoPrazo_41 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosLongoPrazo_41 = format_TerminaisdePassageirosLongoPrazo_41.readFeatures(json_TerminaisdePassageirosLongoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosLongoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosLongoPrazo_41.addFeatures(features_TerminaisdePassageirosLongoPrazo_41);
var lyr_TerminaisdePassageirosLongoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosLongoPrazo_41, 
                style: style_TerminaisdePassageirosLongoPrazo_41,
                popuplayertitle: 'Terminais de Passageiros - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosLongoPrazo_41.png" /> Terminais de Passageiros - Longo Prazo'
            });
var format_TerminaisdePassageirosMdioPrazo_42 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosMdioPrazo_42 = format_TerminaisdePassageirosMdioPrazo_42.readFeatures(json_TerminaisdePassageirosMdioPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosMdioPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosMdioPrazo_42.addFeatures(features_TerminaisdePassageirosMdioPrazo_42);
var lyr_TerminaisdePassageirosMdioPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosMdioPrazo_42, 
                style: style_TerminaisdePassageirosMdioPrazo_42,
                popuplayertitle: 'Terminais de Passageiros - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosMdioPrazo_42.png" /> Terminais de Passageiros - Médio Prazo'
            });
var format_TerminaisdePassageirosCurtoPrazo_43 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosCurtoPrazo_43 = format_TerminaisdePassageirosCurtoPrazo_43.readFeatures(json_TerminaisdePassageirosCurtoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosCurtoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosCurtoPrazo_43.addFeatures(features_TerminaisdePassageirosCurtoPrazo_43);
var lyr_TerminaisdePassageirosCurtoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosCurtoPrazo_43, 
                style: style_TerminaisdePassageirosCurtoPrazo_43,
                popuplayertitle: 'Terminais de Passageiros - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosCurtoPrazo_43.png" /> Terminais de Passageiros - Curto Prazo'
            });
var format_TerminaisdePassageirosSituaoAtual_44 = new ol.format.GeoJSON();
var features_TerminaisdePassageirosSituaoAtual_44 = format_TerminaisdePassageirosSituaoAtual_44.readFeatures(json_TerminaisdePassageirosSituaoAtual_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TerminaisdePassageirosSituaoAtual_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageirosSituaoAtual_44.addFeatures(features_TerminaisdePassageirosSituaoAtual_44);
var lyr_TerminaisdePassageirosSituaoAtual_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageirosSituaoAtual_44, 
                style: style_TerminaisdePassageirosSituaoAtual_44,
                popuplayertitle: 'Terminais de Passageiros - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageirosSituaoAtual_44.png" /> Terminais de Passageiros - Situação Atual'
            });
var format_ArmazenagemLongoPrazo_45 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_45 = format_ArmazenagemLongoPrazo_45.readFeatures(json_ArmazenagemLongoPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemLongoPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_45.addFeatures(features_ArmazenagemLongoPrazo_45);
var lyr_ArmazenagemLongoPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_45, 
                style: style_ArmazenagemLongoPrazo_45,
                popuplayertitle: 'Armazenagem - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_45.png" /> Armazenagem - Longo Prazo'
            });
var format_ArmazenagemMdioPrazo_46 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_46 = format_ArmazenagemMdioPrazo_46.readFeatures(json_ArmazenagemMdioPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemMdioPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_46.addFeatures(features_ArmazenagemMdioPrazo_46);
var lyr_ArmazenagemMdioPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_46, 
                style: style_ArmazenagemMdioPrazo_46,
                popuplayertitle: 'Armazenagem - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_46.png" /> Armazenagem - Médio Prazo'
            });
var format_ArmazenagemCurtoPrazo_47 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_47 = format_ArmazenagemCurtoPrazo_47.readFeatures(json_ArmazenagemCurtoPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemCurtoPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_47.addFeatures(features_ArmazenagemCurtoPrazo_47);
var lyr_ArmazenagemCurtoPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_47, 
                style: style_ArmazenagemCurtoPrazo_47,
                popuplayertitle: 'Armazenagem - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_47.png" /> Armazenagem - Curto Prazo'
            });
var format_ArmazenagemSituaoAtual_48 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_48 = format_ArmazenagemSituaoAtual_48.readFeatures(json_ArmazenagemSituaoAtual_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ArmazenagemSituaoAtual_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_48.addFeatures(features_ArmazenagemSituaoAtual_48);
var lyr_ArmazenagemSituaoAtual_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_48, 
                style: style_ArmazenagemSituaoAtual_48,
                popuplayertitle: 'Armazenagem - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_48.png" /> Armazenagem - Situação Atual'
            });
var format_reaseInstalaesAlfandegadas_49 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_49 = format_reaseInstalaesAlfandegadas_49.readFeatures(json_reaseInstalaesAlfandegadas_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reaseInstalaesAlfandegadas_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_49.addFeatures(features_reaseInstalaesAlfandegadas_49);
var lyr_reaseInstalaesAlfandegadas_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_49, 
                style: style_reaseInstalaesAlfandegadas_49,
                popuplayertitle: 'Áreas e Instalações Alfandegadas',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_49.png" /> Áreas e Instalações Alfandegadas'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento -  Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento -  Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual'
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual'
            });
var format_Passageiros_57 = new ol.format.GeoJSON();
var features_Passageiros_57 = format_Passageiros_57.readFeatures(json_Passageiros_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passageiros_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_57.addFeatures(features_Passageiros_57);
var lyr_Passageiros_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_57, 
                style: style_Passageiros_57,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_57.png" /> Passageiros'
            });
var format_MultipropsitoCargaGeraleGranelSlidoMineral_58 = new ol.format.GeoJSON();
var features_MultipropsitoCargaGeraleGranelSlidoMineral_58 = format_MultipropsitoCargaGeraleGranelSlidoMineral_58.readFeatures(json_MultipropsitoCargaGeraleGranelSlidoMineral_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_58.addFeatures(features_MultipropsitoCargaGeraleGranelSlidoMineral_58);
var lyr_MultipropsitoCargaGeraleGranelSlidoMineral_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_58, 
                style: style_MultipropsitoCargaGeraleGranelSlidoMineral_58,
                popuplayertitle: 'Multipropósito - Carga Geral e Granel Sólido Mineral',
                interactive: true,
                title: '<img src="styles/legend/MultipropsitoCargaGeraleGranelSlidoMineral_58.png" /> Multipropósito - Carga Geral e Granel Sólido Mineral'
            });
var format_Multipropsito_59 = new ol.format.GeoJSON();
var features_Multipropsito_59 = format_Multipropsito_59.readFeatures(json_Multipropsito_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_59.addFeatures(features_Multipropsito_59);
var lyr_Multipropsito_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_59, 
                style: style_Multipropsito_59,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_59.png" /> Multipropósito'
            });
var format_CargaGeral_60 = new ol.format.GeoJSON();
var features_CargaGeral_60 = format_CargaGeral_60.readFeatures(json_CargaGeral_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_60.addFeatures(features_CargaGeral_60);
var lyr_CargaGeral_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_60, 
                style: style_CargaGeral_60,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_60.png" /> Carga Geral'
            });
var format_GranelSlidoVegetal_61 = new ol.format.GeoJSON();
var features_GranelSlidoVegetal_61 = format_GranelSlidoVegetal_61.readFeatures(json_GranelSlidoVegetal_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoVegetal_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoVegetal_61.addFeatures(features_GranelSlidoVegetal_61);
var lyr_GranelSlidoVegetal_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoVegetal_61, 
                style: style_GranelSlidoVegetal_61,
                popuplayertitle: 'Granel Sólido Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoVegetal_61.png" /> Granel Sólido Vegetal'
            });
var format_GranelSlidoMineral_62 = new ol.format.GeoJSON();
var features_GranelSlidoMineral_62 = format_GranelSlidoMineral_62.readFeatures(json_GranelSlidoMineral_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoMineral_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoMineral_62.addFeatures(features_GranelSlidoMineral_62);
var lyr_GranelSlidoMineral_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoMineral_62, 
                style: style_GranelSlidoMineral_62,
                popuplayertitle: 'Granel Sólido Mineral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoMineral_62.png" /> Granel Sólido Mineral'
            });
var format_GranelLquido_63 = new ol.format.GeoJSON();
var features_GranelLquido_63 = format_GranelLquido_63.readFeatures(json_GranelLquido_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_63.addFeatures(features_GranelLquido_63);
var lyr_GranelLquido_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_63, 
                style: style_GranelLquido_63,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_63.png" /> Granel Líquido'
            });
var format_Passageiros_64 = new ol.format.GeoJSON();
var features_Passageiros_64 = format_Passageiros_64.readFeatures(json_Passageiros_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passageiros_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_64.addFeatures(features_Passageiros_64);
var lyr_Passageiros_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_64, 
                style: style_Passageiros_64,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_64.png" /> Passageiros'
            });
var format_MultipropsitoCargaGeraleGranelSlidoMineral_65 = new ol.format.GeoJSON();
var features_MultipropsitoCargaGeraleGranelSlidoMineral_65 = format_MultipropsitoCargaGeraleGranelSlidoMineral_65.readFeatures(json_MultipropsitoCargaGeraleGranelSlidoMineral_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_65.addFeatures(features_MultipropsitoCargaGeraleGranelSlidoMineral_65);
var lyr_MultipropsitoCargaGeraleGranelSlidoMineral_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_65, 
                style: style_MultipropsitoCargaGeraleGranelSlidoMineral_65,
                popuplayertitle: 'Multipropósito - Carga Geral e Granel Sólido Mineral',
                interactive: true,
                title: '<img src="styles/legend/MultipropsitoCargaGeraleGranelSlidoMineral_65.png" /> Multipropósito - Carga Geral e Granel Sólido Mineral'
            });
var format_Multipropsito_66 = new ol.format.GeoJSON();
var features_Multipropsito_66 = format_Multipropsito_66.readFeatures(json_Multipropsito_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_66.addFeatures(features_Multipropsito_66);
var lyr_Multipropsito_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_66, 
                style: style_Multipropsito_66,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_66.png" /> Multipropósito'
            });
var format_CargaGeral_67 = new ol.format.GeoJSON();
var features_CargaGeral_67 = format_CargaGeral_67.readFeatures(json_CargaGeral_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_67.addFeatures(features_CargaGeral_67);
var lyr_CargaGeral_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_67, 
                style: style_CargaGeral_67,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_67.png" /> Carga Geral'
            });
var format_GranelSlidoVegetal_68 = new ol.format.GeoJSON();
var features_GranelSlidoVegetal_68 = format_GranelSlidoVegetal_68.readFeatures(json_GranelSlidoVegetal_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoVegetal_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoVegetal_68.addFeatures(features_GranelSlidoVegetal_68);
var lyr_GranelSlidoVegetal_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoVegetal_68, 
                style: style_GranelSlidoVegetal_68,
                popuplayertitle: 'Granel Sólido Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoVegetal_68.png" /> Granel Sólido Vegetal'
            });
var format_GranelSlidoMineral_69 = new ol.format.GeoJSON();
var features_GranelSlidoMineral_69 = format_GranelSlidoMineral_69.readFeatures(json_GranelSlidoMineral_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoMineral_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoMineral_69.addFeatures(features_GranelSlidoMineral_69);
var lyr_GranelSlidoMineral_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoMineral_69, 
                style: style_GranelSlidoMineral_69,
                popuplayertitle: 'Granel Sólido Mineral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoMineral_69.png" /> Granel Sólido Mineral'
            });
var format_GranelLquido_70 = new ol.format.GeoJSON();
var features_GranelLquido_70 = format_GranelLquido_70.readFeatures(json_GranelLquido_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_70.addFeatures(features_GranelLquido_70);
var lyr_GranelLquido_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_70, 
                style: style_GranelLquido_70,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_70.png" /> Granel Líquido'
            });
var format_Passageiros_71 = new ol.format.GeoJSON();
var features_Passageiros_71 = format_Passageiros_71.readFeatures(json_Passageiros_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passageiros_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_71.addFeatures(features_Passageiros_71);
var lyr_Passageiros_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_71, 
                style: style_Passageiros_71,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_71.png" /> Passageiros'
            });
var format_MultipropsitoCargaGeraleGranelSlidoMineral_72 = new ol.format.GeoJSON();
var features_MultipropsitoCargaGeraleGranelSlidoMineral_72 = format_MultipropsitoCargaGeraleGranelSlidoMineral_72.readFeatures(json_MultipropsitoCargaGeraleGranelSlidoMineral_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_72.addFeatures(features_MultipropsitoCargaGeraleGranelSlidoMineral_72);
var lyr_MultipropsitoCargaGeraleGranelSlidoMineral_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_72, 
                style: style_MultipropsitoCargaGeraleGranelSlidoMineral_72,
                popuplayertitle: 'Multipropósito - Carga Geral e Granel Sólido Mineral',
                interactive: true,
                title: '<img src="styles/legend/MultipropsitoCargaGeraleGranelSlidoMineral_72.png" /> Multipropósito - Carga Geral e Granel Sólido Mineral'
            });
var format_Multipropsito_73 = new ol.format.GeoJSON();
var features_Multipropsito_73 = format_Multipropsito_73.readFeatures(json_Multipropsito_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_73.addFeatures(features_Multipropsito_73);
var lyr_Multipropsito_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_73, 
                style: style_Multipropsito_73,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_73.png" /> Multipropósito'
            });
var format_CargaGeral_74 = new ol.format.GeoJSON();
var features_CargaGeral_74 = format_CargaGeral_74.readFeatures(json_CargaGeral_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_74.addFeatures(features_CargaGeral_74);
var lyr_CargaGeral_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_74, 
                style: style_CargaGeral_74,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_74.png" /> Carga Geral'
            });
var format_GranelSlidoVegetal_75 = new ol.format.GeoJSON();
var features_GranelSlidoVegetal_75 = format_GranelSlidoVegetal_75.readFeatures(json_GranelSlidoVegetal_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoVegetal_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoVegetal_75.addFeatures(features_GranelSlidoVegetal_75);
var lyr_GranelSlidoVegetal_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoVegetal_75, 
                style: style_GranelSlidoVegetal_75,
                popuplayertitle: 'Granel Sólido Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoVegetal_75.png" /> Granel Sólido Vegetal'
            });
var format_GranelSlidoMineral_76 = new ol.format.GeoJSON();
var features_GranelSlidoMineral_76 = format_GranelSlidoMineral_76.readFeatures(json_GranelSlidoMineral_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoMineral_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoMineral_76.addFeatures(features_GranelSlidoMineral_76);
var lyr_GranelSlidoMineral_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoMineral_76, 
                style: style_GranelSlidoMineral_76,
                popuplayertitle: 'Granel Sólido Mineral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoMineral_76.png" /> Granel Sólido Mineral'
            });
var format_GranelLquido_77 = new ol.format.GeoJSON();
var features_GranelLquido_77 = format_GranelLquido_77.readFeatures(json_GranelLquido_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_77.addFeatures(features_GranelLquido_77);
var lyr_GranelLquido_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_77, 
                style: style_GranelLquido_77,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_77.png" /> Granel Líquido'
            });
var format_Passageiros_78 = new ol.format.GeoJSON();
var features_Passageiros_78 = format_Passageiros_78.readFeatures(json_Passageiros_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Passageiros_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Passageiros_78.addFeatures(features_Passageiros_78);
var lyr_Passageiros_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Passageiros_78, 
                style: style_Passageiros_78,
                popuplayertitle: 'Passageiros',
                interactive: true,
                title: '<img src="styles/legend/Passageiros_78.png" /> Passageiros'
            });
var format_MultipropsitoCargaGeraleGranelSlidoMineral_79 = new ol.format.GeoJSON();
var features_MultipropsitoCargaGeraleGranelSlidoMineral_79 = format_MultipropsitoCargaGeraleGranelSlidoMineral_79.readFeatures(json_MultipropsitoCargaGeraleGranelSlidoMineral_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_79.addFeatures(features_MultipropsitoCargaGeraleGranelSlidoMineral_79);
var lyr_MultipropsitoCargaGeraleGranelSlidoMineral_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MultipropsitoCargaGeraleGranelSlidoMineral_79, 
                style: style_MultipropsitoCargaGeraleGranelSlidoMineral_79,
                popuplayertitle: 'Multipropósito - Carga Geral e Granel Sólido Mineral',
                interactive: true,
                title: '<img src="styles/legend/MultipropsitoCargaGeraleGranelSlidoMineral_79.png" /> Multipropósito - Carga Geral e Granel Sólido Mineral'
            });
var format_Multipropsito_80 = new ol.format.GeoJSON();
var features_Multipropsito_80 = format_Multipropsito_80.readFeatures(json_Multipropsito_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multipropsito_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_80.addFeatures(features_Multipropsito_80);
var lyr_Multipropsito_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_80, 
                style: style_Multipropsito_80,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_80.png" /> Multipropósito'
            });
var format_CargaGeral_81 = new ol.format.GeoJSON();
var features_CargaGeral_81 = format_CargaGeral_81.readFeatures(json_CargaGeral_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CargaGeral_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_81.addFeatures(features_CargaGeral_81);
var lyr_CargaGeral_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_81, 
                style: style_CargaGeral_81,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_81.png" /> Carga Geral'
            });
var format_GranelSlidoVegetal_82 = new ol.format.GeoJSON();
var features_GranelSlidoVegetal_82 = format_GranelSlidoVegetal_82.readFeatures(json_GranelSlidoVegetal_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoVegetal_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoVegetal_82.addFeatures(features_GranelSlidoVegetal_82);
var lyr_GranelSlidoVegetal_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoVegetal_82, 
                style: style_GranelSlidoVegetal_82,
                popuplayertitle: 'Granel Sólido Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoVegetal_82.png" /> Granel Sólido Vegetal'
            });
var format_GranelSlidoMineral_83 = new ol.format.GeoJSON();
var features_GranelSlidoMineral_83 = format_GranelSlidoMineral_83.readFeatures(json_GranelSlidoMineral_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelSlidoMineral_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelSlidoMineral_83.addFeatures(features_GranelSlidoMineral_83);
var lyr_GranelSlidoMineral_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelSlidoMineral_83, 
                style: style_GranelSlidoMineral_83,
                popuplayertitle: 'Granel Sólido Mineral',
                interactive: true,
                title: '<img src="styles/legend/GranelSlidoMineral_83.png" /> Granel Sólido Mineral'
            });
var format_GranelLquido_84 = new ol.format.GeoJSON();
var features_GranelLquido_84 = format_GranelLquido_84.readFeatures(json_GranelLquido_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GranelLquido_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranelLquido_84.addFeatures(features_GranelLquido_84);
var lyr_GranelLquido_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranelLquido_84, 
                style: style_GranelLquido_84,
                popuplayertitle: 'Granel Líquido',
                interactive: true,
                title: '<img src="styles/legend/GranelLquido_84.png" /> Granel Líquido'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_85 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_85 = format_reasAfetassOperaesPorturiasLongoPrazo_85.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_85.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_85);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_85, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_85,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_85.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo'
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_86 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_86 = format_reasAfetassOperaesPorturiasMdioPrazo_86.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_86.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_86);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_86, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_86,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_86.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo'
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_87 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_87 = format_reasAfetassOperaesPorturiasCurtoPrazo_87.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_87.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_87);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_87, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_87,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_87.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo'
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_88 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_88 = format_reasAfetassOperaesPorturiasSituaoAtual_88.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_88.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_88);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_88, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_88,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_88.png" /> Áreas Afetas às Operações Portuárias - Situação Atual'
            });
var format_PoligonaldareadoPortoOrganizadodeFortaleza_89 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeFortaleza_89 = format_PoligonaldareadoPortoOrganizadodeFortaleza_89.readFeatures(json_PoligonaldareadoPortoOrganizadodeFortaleza_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoligonaldareadoPortoOrganizadodeFortaleza_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeFortaleza_89.addFeatures(features_PoligonaldareadoPortoOrganizadodeFortaleza_89);
var lyr_PoligonaldareadoPortoOrganizadodeFortaleza_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeFortaleza_89, 
                style: style_PoligonaldareadoPortoOrganizadodeFortaleza_89,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Fortaleza',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeFortaleza_89.png" /> Poligonal da Área do Porto Organizado de Fortaleza'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeFortaleza_89,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado'});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_85,lyr_reasAfetassOperaesPorturiasMdioPrazo_86,lyr_reasAfetassOperaesPorturiasCurtoPrazo_87,lyr_reasAfetassOperaesPorturiasSituaoAtual_88,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_Passageiros_78,lyr_MultipropsitoCargaGeraleGranelSlidoMineral_79,lyr_Multipropsito_80,lyr_CargaGeral_81,lyr_GranelSlidoVegetal_82,lyr_GranelSlidoMineral_83,lyr_GranelLquido_84,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga- Situação Atual'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiros_71,lyr_MultipropsitoCargaGeraleGranelSlidoMineral_72,lyr_Multipropsito_73,lyr_CargaGeral_74,lyr_GranelSlidoVegetal_75,lyr_GranelSlidoMineral_76,lyr_GranelLquido_77,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiros_64,lyr_MultipropsitoCargaGeraleGranelSlidoMineral_65,lyr_Multipropsito_66,lyr_CargaGeral_67,lyr_GranelSlidoVegetal_68,lyr_GranelSlidoMineral_69,lyr_GranelLquido_70,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_Passageiros_57,lyr_MultipropsitoCargaGeraleGranelSlidoMineral_58,lyr_Multipropsito_59,lyr_CargaGeral_60,lyr_GranelSlidoVegetal_61,lyr_GranelSlidoMineral_62,lyr_GranelLquido_63,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas'});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento'});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_49,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas'});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_45,lyr_ArmazenagemMdioPrazo_46,lyr_ArmazenagemCurtoPrazo_47,lyr_ArmazenagemSituaoAtual_48,],
                                fold: 'open',
                                title: 'Armazenagem'});
var group_TerminaisdePassageiros = new ol.layer.Group({
                                layers: [lyr_TerminaisdePassageirosLongoPrazo_41,lyr_TerminaisdePassageirosMdioPrazo_42,lyr_TerminaisdePassageirosCurtoPrazo_43,lyr_TerminaisdePassageirosSituaoAtual_44,],
                                fold: 'open',
                                title: 'Terminais de Passageiros'});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_37,lyr_AcostagemMdioPrazo_38,lyr_AcostagemCurtoPrazo_39,lyr_AcostagemSituaoAtual_40,],
                                fold: 'open',
                                title: 'Acostagem'});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias'});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31,lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta'});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta'});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_24,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos'});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_20,lyr_AcessosRodoviriosInternosMdioPrazo_21,lyr_AcessosRodoviriosInternosCurtoPrazo_22,lyr_AcessosRodoviriosInternosSituaoAtual_23,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos'});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_19,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos'});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_15,lyr_AcessosFerroviriosInternosMdioPrazo_16,lyr_AcessosFerroviriosInternosCurtoPrazo_17,lyr_AcessosFerroviriosInternosSituaoAtual_18,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos'});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosExternos_14,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos'});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_10,lyr_CanaisdeAcessoMdioPrazo_11,lyr_CanaisdeAcessoCurtoPrazo_12,lyr_CanaisdeAcessoSituaoAtual_13,],
                                fold: 'open',
                                title: 'Canais de Acesso'});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_6,lyr_BaciasdeEvoluoMdioPrazo_7,lyr_BaciasdeEvoluoCurtoPrazo_8,lyr_BaciasdeEvoluoSituaoAtual_9,],
                                fold: 'open',
                                title: 'Bacias de Evolução'});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_2,lyr_FundeadourosMdioPrazo_3,lyr_FundeadourosCurtoPrazo_4,lyr_FundeadourosSituaoAtual_5,],
                                fold: 'open',
                                title: 'Fundeadouros'});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_1,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais'});

lyr_GoogleSatellite_0.setVisible(true);lyr_reasUrbanaseRurais_1.setVisible(false);lyr_FundeadourosLongoPrazo_2.setVisible(false);lyr_FundeadourosMdioPrazo_3.setVisible(false);lyr_FundeadourosCurtoPrazo_4.setVisible(false);lyr_FundeadourosSituaoAtual_5.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_6.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_7.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_8.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_9.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_10.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_11.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_12.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_13.setVisible(false);lyr_AcessosDutoviriosExternos_14.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_15.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_16.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_18.setVisible(false);lyr_AcessosFerroviriosExternos_19.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_20.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_21.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_22.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_23.setVisible(false);lyr_AcessosRodoviriosExternos_24.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.setVisible(false);lyr_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.setVisible(false);lyr_AcostagemLongoPrazo_37.setVisible(false);lyr_AcostagemMdioPrazo_38.setVisible(false);lyr_AcostagemCurtoPrazo_39.setVisible(false);lyr_AcostagemSituaoAtual_40.setVisible(false);lyr_TerminaisdePassageirosLongoPrazo_41.setVisible(false);lyr_TerminaisdePassageirosMdioPrazo_42.setVisible(false);lyr_TerminaisdePassageirosCurtoPrazo_43.setVisible(false);lyr_TerminaisdePassageirosSituaoAtual_44.setVisible(false);lyr_ArmazenagemLongoPrazo_45.setVisible(false);lyr_ArmazenagemMdioPrazo_46.setVisible(false);lyr_ArmazenagemCurtoPrazo_47.setVisible(false);lyr_ArmazenagemSituaoAtual_48.setVisible(false);lyr_reaseInstalaesAlfandegadas_49.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.setVisible(false);lyr_Passageiros_57.setVisible(false);lyr_MultipropsitoCargaGeraleGranelSlidoMineral_58.setVisible(false);lyr_Multipropsito_59.setVisible(false);lyr_CargaGeral_60.setVisible(false);lyr_GranelSlidoVegetal_61.setVisible(false);lyr_GranelSlidoMineral_62.setVisible(false);lyr_GranelLquido_63.setVisible(false);lyr_Passageiros_64.setVisible(false);lyr_MultipropsitoCargaGeraleGranelSlidoMineral_65.setVisible(false);lyr_Multipropsito_66.setVisible(false);lyr_CargaGeral_67.setVisible(false);lyr_GranelSlidoVegetal_68.setVisible(false);lyr_GranelSlidoMineral_69.setVisible(false);lyr_GranelLquido_70.setVisible(false);lyr_Passageiros_71.setVisible(false);lyr_MultipropsitoCargaGeraleGranelSlidoMineral_72.setVisible(false);lyr_Multipropsito_73.setVisible(false);lyr_CargaGeral_74.setVisible(false);lyr_GranelSlidoVegetal_75.setVisible(false);lyr_GranelSlidoMineral_76.setVisible(false);lyr_GranelLquido_77.setVisible(false);lyr_Passageiros_78.setVisible(false);lyr_MultipropsitoCargaGeraleGranelSlidoMineral_79.setVisible(false);lyr_Multipropsito_80.setVisible(false);lyr_CargaGeral_81.setVisible(false);lyr_GranelSlidoVegetal_82.setVisible(false);lyr_GranelSlidoMineral_83.setVisible(false);lyr_GranelLquido_84.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_85.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_86.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_87.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_88.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeFortaleza_89.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosDutoviriosExternos,group_AcessosFerroviriosInternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_TerminaisdePassageiros,group_Armazenagem,group_reaseInstalaesAlfandegadas,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_reasUrbanaseRurais_1.set('fieldAliases', {'Tipo': 'Tipo de Área', 'Ins. Leg': 'Instrumento Legal', 'Área': 'Área (m²)', });
lyr_FundeadourosLongoPrazo_2.set('fieldAliases', {'N. Ident.': 'Número de Identificação', 'Função': 'Função', 'Calado': 'Calado (m)', });
lyr_FundeadourosMdioPrazo_3.set('fieldAliases', {'N. Ident.': 'Número de Identificação', 'Função': 'Função', 'Calado': 'Calado (m)', });
lyr_FundeadourosCurtoPrazo_4.set('fieldAliases', {'N. Ident.': 'Número de Identificação', 'Função': 'Função', 'Calado': 'Calado (m)', });
lyr_FundeadourosSituaoAtual_5.set('fieldAliases', {'N. Ident.': 'Número de Identificação', 'Função': 'Função', 'Calado': 'Calado (m)', });
lyr_BaciasdeEvoluoLongoPrazo_6.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m)', });
lyr_BaciasdeEvoluoMdioPrazo_7.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m)', });
lyr_BaciasdeEvoluoCurtoPrazo_8.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m)', });
lyr_BaciasdeEvoluoSituaoAtual_9.set('fieldAliases', {'Função': 'Função', 'Calado': 'Calado (m)', });
lyr_CanaisdeAcessoLongoPrazo_10.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m)', });
lyr_CanaisdeAcessoMdioPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m)', });
lyr_CanaisdeAcessoCurtoPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m)', });
lyr_CanaisdeAcessoSituaoAtual_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m)', });
lyr_AcessosDutoviriosExternos_14.set('fieldAliases', {'Nome': 'Nome', 'Mat.Trans.': 'Material Transportado', 'Posição': 'Posição', 'Operador': 'Operador', 'T. Duto': 'Tipo de Duto', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldAliases', {'Nome': 'Nome', 'Operador': 'Operador', });
lyr_AcessosFerroviriosExternos_19.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descrição', });
lyr_AcessosRodoviriosInternosLongoPrazo_20.set('fieldAliases', {'Ident.': 'Identificação', 'Nº Pistas': 'Número de Pistas de Rolamento', });
lyr_AcessosRodoviriosInternosMdioPrazo_21.set('fieldAliases', {'Ident.': 'Identificação', 'Nº Pistas': 'Número de Pistas de Rolamento', });
lyr_AcessosRodoviriosInternosCurtoPrazo_22.set('fieldAliases', {'Ident.': 'Identificação', 'Nº Pistas': 'Número de Pistas de Rolamento', });
lyr_AcessosRodoviriosInternosSituaoAtual_23.set('fieldAliases', {'Ident.': 'Identificação', 'Nº Pistas': 'Número de Pistas de Rolamento', });
lyr_AcessosRodoviriosExternos_24.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.set('fieldAliases', {'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração', 'Area': 'Área (m²)', 'Util.Area': 'Utilização Atual da Área', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.set('fieldAliases', {'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração', 'Area': 'Área (m²)', 'Util.Area': 'Utilização Atual da Área', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.set('fieldAliases', {'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração', 'Area': 'Área (m²)', 'Util.Area': 'Utilização Atual da Área', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.set('fieldAliases', {'Nome': 'Nome', 'T. Explo.': 'Tipo de Exploração', 'Area': 'Área (m²)', 'Util.Area': 'Utilização Atual da Área', });
lyr_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29.set('fieldAliases', {'Nome': 'Nome', 'T. Cessao': 'Tipo de Cessão', 'Respons.': 'Responsável', 'Area': 'Área (m²)', 'D. Inicio': 'Data de Início do Contrato', 'D. Term.': 'Data de Término do Contrato', 'A. Desenv.': 'Atividade Desenvolvida', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30.set('fieldAliases', {'Nome': 'Nome', 'T. Cessao': 'Tipo de Cessão', 'Respons.': 'Responsável', 'Area': 'Área (m²)', 'D. Inicio': 'Data de Início do Contrato', 'D. Term.': 'Data de Término do Contrato', 'A. Desenv.': 'Atividade Desenvolvida', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31.set('fieldAliases', {'Nome': 'Nome', 'T. Cessao': 'Tipo de Cessão', 'Respons.': 'Responsável', 'Area': 'Área (m²)', 'D. Inicio': 'Data de Início do Contrato', 'D. Term.': 'Data de Término do Contrato', 'A. Desenv.': 'Atividade Desenvolvida', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32.set('fieldAliases', {'Nome': 'Nome', 'T. Cessao': 'Tipo de Cessão', 'Respons.': 'Responsável', 'Area': 'Área (m²)', 'D. Inicio': 'Data de Início do Contrato', 'D. Term': 'Data de Término do Contrato', 'A. Desenv.': 'Atividade Desenvolvida', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Area': 'Área (m²)', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Area': 'Área (m²)', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Area': 'Área (m²)', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação', 'Area': 'Área (m²)', });
lyr_AcostagemLongoPrazo_37.set('fieldAliases', {'Id. Cais': 'Identificador do Cais', 'Id. Berço': 'Identificador do Berço', 'C. Const.': 'Características Construtivas', 'Comp.': 'Comprimento (m)', 'Profund.': 'Profundidade (m)', 'Calado': 'Calado (m)', 'Per. Carga': 'Perfil de Carga', });
lyr_AcostagemMdioPrazo_38.set('fieldAliases', {'Id. Cais': 'Identificador do Cais', 'Id. Berço': 'Identificador do Berço', 'C. Const.': 'Características Construtivas', 'Comp.': 'Comprimento (m)', 'Profund.': 'Profundidade (m)', 'Calado': 'Calado (m)', 'Per. Carga': 'Perfil de Carga', });
lyr_AcostagemCurtoPrazo_39.set('fieldAliases', {'Id. Cais': 'Identificador do Cais', 'Id. Berço': 'Identificador do Berço', 'C. Const.': 'Características Construtivas', 'Comp.': 'Comprimento (m)', 'Profund.': 'Profundidade (m)', 'Calado': 'Calado (m)', 'Per. Carga': 'Perfil de Carga', });
lyr_AcostagemSituaoAtual_40.set('fieldAliases', {'Id. Cais': 'Identificador do Cais', 'Id. Berço': 'Identificador do Berço', 'C. Const.': 'Características Construtivas', 'Comp.': 'Comprimento (m)', 'Profund.': 'Profundidade (m)', 'Calado': 'Calado (m)', 'Per. Carga': 'Perfil de Carga', });
lyr_TerminaisdePassageirosLongoPrazo_41.set('fieldAliases', {'Nome': 'Nome', 'A. Term.': 'Área do Terminal (m²) ', 'A. Estac.': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosMdioPrazo_42.set('fieldAliases', {'Nome': 'Nome', 'A. Term.': 'Área do Terminal (m²) ', 'A. Estac.': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosCurtoPrazo_43.set('fieldAliases', {'Nome': 'Nome', 'A. Term.': 'Área do Terminal (m²) ', 'A. Estac.': 'Área do Estacionamento (m²) ', });
lyr_TerminaisdePassageirosSituaoAtual_44.set('fieldAliases', {'Nome': 'Nome', 'A. Term.': 'Área do Terminal (m²) ', 'A. Estac.': 'Área do Estacionamento (m²) ', });
lyr_ArmazenagemLongoPrazo_45.set('fieldAliases', {'T. Instal.': 'Tipo de Instalação', 'Capacidade': 'Capacidade', 'Area': 'Área (m²)', 'Volume': 'Volume', });
lyr_ArmazenagemMdioPrazo_46.set('fieldAliases', {'T. Instal.': 'Tipo de Instalação', 'Capacidade': 'Capacidade', 'Area': 'Área (m²)', 'Volume': 'Volume', });
lyr_ArmazenagemCurtoPrazo_47.set('fieldAliases', {'T. Instal.': 'Tipo de Instalação', 'Capacidade': 'Capacidade', 'Area': 'Área (m²)', 'Volume': 'Volume', });
lyr_ArmazenagemSituaoAtual_48.set('fieldAliases', {'T. Instal': 'Tipo da Instalação', 'Capacidade': 'Capacidade', 'Area': 'Área (m²)', 'Volume': 'Volume', });
lyr_reaseInstalaesAlfandegadas_49.set('fieldAliases', {'Ins. Legal': 'Instrumento Legal', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.set('fieldAliases', {'Arrend.': 'Arrendatário', 'Nº Cont.': 'Número do Contrato', 'D. Inicio': 'Data de Início do Contrato', 'D. Term.': 'Data de Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga', 'Area': 'Área (m²)', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.set('fieldAliases', {'Arrend.': 'Arrendatário', 'Nº Cont.': 'Número do Contrato', 'D. Inicio': 'Data de Início do Contrato', 'D. Term.': 'Data de Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga', 'Area': 'Área (m²)', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.set('fieldAliases', {'Arrend.': 'Arrendatário', 'Nº Cont.': 'Número do Contrato', 'D. Inicio': 'Data de Início do Contrato', 'D. Term.': 'Data de Término do Contrato', 'P. Prorrog': 'Possibilidade de Prorrogação', 'Perfil': 'Perfil de Carga', 'Area': 'Área (m²)', });
lyr_Passageiros_57.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_58.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_Multipropsito_59.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_CargaGeral_60.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelSlidoVegetal_61.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelSlidoMineral_62.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelLquido_63.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_Passageiros_64.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_65.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_Multipropsito_66.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_CargaGeral_67.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelSlidoVegetal_68.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelSlidoMineral_69.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelLquido_70.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_Passageiros_71.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_72.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_Multipropsito_73.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_CargaGeral_74.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelSlidoVegetal_75.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelSlidoMineral_76.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelLquido_77.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_Passageiros_78.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_79.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_Multipropsito_80.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_CargaGeral_81.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_GranelSlidoVegetal_82.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_GranelSlidoMineral_83.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_GranelLquido_84.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T. Instal.': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_85.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_86.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_87.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_88.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²)', 'Perfil': 'Perfil de Carga', 'T. Instal.': 'Tipo de Instalação', });
lyr_PoligonaldareadoPortoOrganizadodeFortaleza_89.set('fieldAliases', {'Name': 'Anexo', 'Ins. Legal': 'Instrumento Legal', });
lyr_reasUrbanaseRurais_1.set('fieldImages', {'Tipo': 'TextEdit', 'Ins. Leg': 'TextEdit', 'Área': 'TextEdit', });
lyr_FundeadourosLongoPrazo_2.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_3.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_4.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_5.set('fieldImages', {'N. Ident.': 'TextEdit', 'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_6.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_7.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_8.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_9.set('fieldImages', {'Função': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_10.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosDutoviriosExternos_14.set('fieldImages', {'Nome': 'TextEdit', 'Mat.Trans.': 'TextEdit', 'Posição': 'TextEdit', 'Operador': 'TextEdit', 'T. Duto': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldImages', {'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldImages', {'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldImages', {'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldImages', {'Nome': '', 'Operador': '', });
lyr_AcessosFerroviriosExternos_19.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_20.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosMdioPrazo_21.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosCurtoPrazo_22.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosInternosSituaoAtual_23.set('fieldImages', {'Ident.': 'TextEdit', 'Nº Pistas': 'TextEdit', });
lyr_AcessosRodoviriosExternos_24.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.set('fieldImages', {'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Area': 'TextEdit', 'Util.Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.set('fieldImages', {'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Area': 'TextEdit', 'Util.Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.set('fieldImages', {'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Area': 'TextEdit', 'Util.Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.set('fieldImages', {'Nome': 'TextEdit', 'T. Explo.': 'TextEdit', 'Area': 'TextEdit', 'Util.Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessao': 'TextEdit', 'Respons.': 'TextEdit', 'Area': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessao': 'TextEdit', 'Respons.': 'TextEdit', 'Area': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessao': 'TextEdit', 'Respons.': 'TextEdit', 'Area': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32.set('fieldImages', {'Nome': 'TextEdit', 'T. Cessao': 'TextEdit', 'Respons.': 'TextEdit', 'Area': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term': 'DateTime', 'A. Desenv.': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_AcostagemLongoPrazo_37.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_38.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_39.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_40.set('fieldImages', {'Id. Cais': 'TextEdit', 'Id. Berço': 'TextEdit', 'C. Const.': 'TextEdit', 'Comp.': 'TextEdit', 'Profund.': 'TextEdit', 'Calado': 'TextEdit', 'Per. Carga': 'TextEdit', });
lyr_TerminaisdePassageirosLongoPrazo_41.set('fieldImages', {'Nome': 'TextEdit', 'A. Term.': 'TextEdit', 'A. Estac.': 'TextEdit', });
lyr_TerminaisdePassageirosMdioPrazo_42.set('fieldImages', {'Nome': 'TextEdit', 'A. Term.': 'TextEdit', 'A. Estac.': 'TextEdit', });
lyr_TerminaisdePassageirosCurtoPrazo_43.set('fieldImages', {'Nome': 'TextEdit', 'A. Term.': 'TextEdit', 'A. Estac.': 'TextEdit', });
lyr_TerminaisdePassageirosSituaoAtual_44.set('fieldImages', {'Nome': 'TextEdit', 'A. Term.': 'TextEdit', 'A. Estac.': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_45.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_46.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_47.set('fieldImages', {'T. Instal.': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_48.set('fieldImages', {'T. Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_49.set('fieldImages', {'Ins. Legal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.set('fieldImages', {'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.set('fieldImages', {'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.set('fieldImages', {'Arrend.': 'TextEdit', 'Nº Cont.': 'TextEdit', 'D. Inicio': 'DateTime', 'D. Term.': 'DateTime', 'P. Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_Passageiros_57.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_58.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Multipropsito_59.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_CargaGeral_60.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelSlidoVegetal_61.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelSlidoMineral_62.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelLquido_63.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Passageiros_64.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_65.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Multipropsito_66.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_CargaGeral_67.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelSlidoVegetal_68.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelSlidoMineral_69.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelLquido_70.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Passageiros_71.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_72.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Multipropsito_73.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_CargaGeral_74.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelSlidoVegetal_75.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelSlidoMineral_76.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelLquido_77.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Passageiros_78.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_79.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_Multipropsito_80.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_CargaGeral_81.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelSlidoVegetal_82.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelSlidoMineral_83.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_GranelLquido_84.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_85.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_86.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_87.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_88.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T. Instal.': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeFortaleza_89.set('fieldImages', {'Name': 'TextEdit', 'Ins. Legal': 'TextEdit', });
lyr_reasUrbanaseRurais_1.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Ins. Leg': 'inline label - visible with data', 'Área': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_2.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_3.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_4.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_5.set('fieldLabels', {'N. Ident.': 'inline label - visible with data', 'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_6.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_7.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_8.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_9.set('fieldLabels', {'Função': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_10.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosDutoviriosExternos_14.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Mat.Trans.': 'inline label - visible with data', 'Posição': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'T. Duto': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosLongoPrazo_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_17.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_18.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Operador': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_19.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_20.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_21.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_22.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_23.set('fieldLabels', {'Ident.': 'inline label - visible with data', 'Nº Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_24.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_25.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util.Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util.Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_27.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util.Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaSituaoAtual_28.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Explo.': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util.Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasemExploraoIndiretaMdioPrazo_29.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessao': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaCurtoPrazo_30.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessao': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessao': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSalasSituaoAtual_32.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T. Cessao': 'inline label - visible with data', 'Respons.': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term': 'inline label - visible with data', 'A. Desenv.': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_37.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_38.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_39.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_40.set('fieldLabels', {'Id. Cais': 'inline label - visible with data', 'Id. Berço': 'inline label - visible with data', 'C. Const.': 'inline label - visible with data', 'Comp.': 'inline label - visible with data', 'Profund.': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per. Carga': 'inline label - visible with data', });
lyr_TerminaisdePassageirosLongoPrazo_41.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A. Term.': 'inline label - visible with data', 'A. Estac.': 'inline label - visible with data', });
lyr_TerminaisdePassageirosMdioPrazo_42.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A. Term.': 'inline label - visible with data', 'A. Estac.': 'inline label - visible with data', });
lyr_TerminaisdePassageirosCurtoPrazo_43.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A. Term.': 'inline label - visible with data', 'A. Estac.': 'inline label - visible with data', });
lyr_TerminaisdePassageirosSituaoAtual_44.set('fieldLabels', {'Nome': 'inline label - visible with data', 'A. Term.': 'inline label - visible with data', 'A. Estac.': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_45.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_46.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_47.set('fieldLabels', {'T. Instal.': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_48.set('fieldLabels', {'T. Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_49.set('fieldLabels', {'Ins. Legal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_53.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.set('fieldLabels', {'Arrend.': 'inline label - visible with data', 'Nº Cont.': 'inline label - visible with data', 'D. Inicio': 'inline label - visible with data', 'D. Term.': 'inline label - visible with data', 'P. Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_Passageiros_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Multipropsito_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_CargaGeral_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelSlidoVegetal_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelSlidoMineral_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelLquido_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Passageiros_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Multipropsito_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_CargaGeral_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelSlidoVegetal_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelSlidoMineral_69.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelLquido_70.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Passageiros_71.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_72.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Multipropsito_73.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_CargaGeral_74.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelSlidoVegetal_75.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelSlidoMineral_76.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelLquido_77.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Passageiros_78.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_MultipropsitoCargaGeraleGranelSlidoMineral_79.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_Multipropsito_80.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_CargaGeral_81.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelSlidoVegetal_82.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelSlidoMineral_83.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_GranelLquido_84.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_85.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_86.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_87.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_88.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T. Instal.': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeFortaleza_89.set('fieldLabels', {'Name': 'inline label - visible with data', 'Ins. Legal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeFortaleza_89.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});