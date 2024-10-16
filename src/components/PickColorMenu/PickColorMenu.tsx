import { Divider } from 'antd';
import { PixelInfoI } from '../../App';
import { rgbToXyz, rgbToLab, contrastCalc } from '../../utils/conversionColors';
import './PickColorMenu.css';
import { memo } from 'react';

interface PickColorMenuProps {
    color1: PixelInfoI
    color2: PixelInfoI
}

const PickColorMenu = memo(function PickColorMenu({
                                                      color1,
                                                      color2,
                                                  }: PickColorMenuProps) {
    const contrast = contrastCalc(color1.rgb, color2.rgb);

    return (
        <div className='pick-color-menu'>
            <div className="pick-color-info">
                <div style={{ background: `rgb(${color1.rgb.join(', ')})` }} className='pick-color' />
                <div className="pick-colors">
                    <p>{ `RGB (${color1.rgb.join(', ')})` }</p>
                    <p>{ `XYZ (${rgbToXyz(color1.rgb).join(', ')})` }</p>
                    <p>{ `LAB (${rgbToLab(color1.rgb).join(', ')})` }</p>
                </div>
            </div>
            <p>{ `X: ${color1.x}; Y: ${color1.y}` }</p>
            <Divider />
            <div className="pick-color-info">
                <div style={{ background: `rgb(${color2.rgb.join(', ')})` }} className='pick-color' />
                <div className="pick-colors">
                    <p>{ `RGB (${color2.rgb.join(', ')})` }</p>
                    <p>{ `XYZ (${rgbToXyz(color2.rgb).join(', ')})` }</p>
                    <p>{ `LAB (${rgbToLab(color2.rgb).join(', ')})` }</p>
                </div>
            </div>
            <p>{ `X: ${color2.x}; Y: ${color2.y}` }</p>
            <Divider />
            <p>Контрастность { contrast.scale }</p>
            { contrast.isContrast
                ? <p>Цвета контрастны</p>
                : <p>Цвета не контрастны</p>
            }
        </div>
    )
});

export default PickColorMenu;
