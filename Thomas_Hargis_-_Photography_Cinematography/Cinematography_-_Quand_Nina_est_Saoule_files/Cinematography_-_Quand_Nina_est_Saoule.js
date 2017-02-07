// Created by iWeb 3.0.4 local-build-20150119

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="480" height="304" style="height: 304px; left: 380px; position: absolute; top: 100px; width: 480px; z-index: 1; "><param name="src" value="Media/OURS_nina_est_saoule-iPhone.m4v" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="480" height="304" style="height: 304px; left: 380px; position: absolute; top: 100px; width: 480px; z-index: 1; "><param name="src" value="Cinematography_-_Quand_Nina_est_Saoule_files/OURS_nina_est_saoule-iPhone.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/OURS_nina_est_saoule-iPhone.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="480" height="304" data="Media/OURS_nina_est_saoule-iPhone.m4v" style="height: 304px; left: 380px; position: absolute; top: 100px; width: 480px; z-index: 1; "><param name="src" value="Media/OURS_nina_est_saoule-iPhone.m4v"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Cinematography_-_Quand_Nina_est_Saoule_files/Cinematography_-_Quand_Nina_est_SaouleMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');performPostEffectsFixups()}
