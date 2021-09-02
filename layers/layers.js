var wms_layers = [];

var lyr_cdne44t_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "cdne44t",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/cdne44t_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8794224.311628, 1804738.850374, 8905543.802421, 1920841.207866]
                            })
                        });

lyr_cdne44t_0.setVisible(true);
var layersList = [lyr_cdne44t_0];
