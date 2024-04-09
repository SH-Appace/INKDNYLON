import React from 'react';
import Svg, {
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
    Circle,
    ClipPath,
    Rect,
} from 'react-native-svg';

export function PayPalSvg({ width, height }) {
    return (
        <Svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M19.8485 6.61723C20.1602 4.58517 19.8485 3.23046 18.7576 1.97996C17.5629 0.573146 15.3813 0 12.5762 0H4.52484C3.95345 0 3.48595 0.416834 3.38206 0.98998L0.00566396 22.3527C-0.0462806 22.7695 0.265387 23.1343 0.680943 23.1343H5.66762L5.30401 25.3226C5.25206 25.6874 5.51179 26 5.92734 26H10.1349C10.6543 26 11.0699 25.6353 11.1218 25.1663L12.0049 19.6433C12.0568 19.1743 12.5243 18.8096 12.9918 18.8096H13.6151C17.6668 18.8096 20.8874 17.1423 21.8224 12.3487C22.186 10.3687 22.0302 8.6493 20.9913 7.50301C20.6796 7.13828 20.316 6.87776 19.8485 6.61723Z" fill="#009CDE" />
            <Path d="M19.8485 6.61723C20.1601 4.58517 19.8485 3.23046 18.7576 1.97996C17.5629 0.573146 15.3813 0 12.5762 0H4.52484C3.95345 0 3.48595 0.416834 3.38206 0.98998L0.00566396 22.3527C-0.0462806 22.7695 0.265387 23.1343 0.680943 23.1343H5.66762L6.86234 15.4228C6.96623 14.8497 7.43373 14.4329 8.00512 14.4329H10.3946C15.0696 14.4329 18.7057 12.5571 19.7446 7.03407C19.7965 6.92986 19.7965 6.77355 19.8485 6.61723Z" fill="#012169" />
            <Path d="M8.26485 6.66934C8.31679 6.30461 8.78429 5.83567 9.25179 5.83567H15.589C16.3163 5.83567 17.0435 5.88777 17.6668 5.99198C18.2382 6.09619 19.2771 6.35671 19.7965 6.66934C20.1082 4.63727 19.7965 3.28257 18.7057 2.03206C17.5629 0.573146 15.3813 0 12.5762 0H4.52484C3.95345 0 3.48595 0.416834 3.38206 0.98998L0.00566396 22.3527C-0.0462806 22.7695 0.265387 23.1343 0.680943 23.1343H5.66762L8.26485 6.66934Z" fill="#003087" />
        </Svg>
    );
}
export function AppleSvg({ width, height }) {
    return (
        <Svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.57853 32C4.81597 31.9726 0.876465 22.2506 0.876465 17.2994C0.876465 9.21163 6.94365 7.441 9.2819 7.441C10.3357 7.441 11.4608 7.85481 12.4533 8.221C13.1473 8.47644 13.865 8.74013 14.2642 8.74013C14.5032 8.74013 15.0662 8.51581 15.5633 8.319C16.6235 7.89694 17.9428 7.37238 19.479 7.37238C19.4818 7.37238 19.4855 7.37238 19.4882 7.37238C20.6353 7.37238 24.1134 7.62413 26.2045 10.7644L26.6943 11.5004L25.9893 12.0324C24.9823 12.7923 23.1448 14.1784 23.1448 16.9241C23.1448 20.176 25.2258 21.4266 26.2255 22.0281C26.6668 22.2936 27.1237 22.5674 27.1237 23.1661C27.1237 23.5571 24.0035 31.9515 19.4726 31.9515C18.3639 31.9515 17.5802 31.6183 16.889 31.3244C16.1895 31.0268 15.5862 30.7705 14.5892 30.7705C14.0838 30.7705 13.4447 31.0094 12.7682 31.2631C11.8436 31.6081 10.7971 32 9.60965 32H9.57853Z" fill="#212121" />
            <Path d="M19.9591 0C20.0771 4.25475 17.0343 7.2065 13.995 7.02138C13.4942 3.62594 17.0339 0 19.9591 0Z" fill="#212121" />
        </Svg>

    );
}
export function MasterCardSvg({ width, height }) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.7453 7.28271H14.4578V16.7161H8.7453V7.28271Z" fill="#FF5F00" />
            <Path d="M9.33339 12.0006C9.33269 11.0922 9.53635 10.1956 9.92897 9.37861C10.3216 8.56158 10.8929 7.84556 11.5996 7.28473C10.7243 6.58922 9.6731 6.15672 8.56618 6.03666C7.45925 5.91661 6.34125 6.11385 5.33995 6.60583C4.33865 7.09781 3.49445 7.86468 2.90383 8.81881C2.31321 9.77294 2 10.8758 2 12.0014C2 13.127 2.31321 14.2299 2.90383 15.184C3.49445 16.1381 4.33865 16.905 5.33995 17.397C6.34125 17.889 7.45925 18.0862 8.56618 17.9662C9.6731 17.8461 10.7243 17.4136 11.5996 16.7181C10.8927 16.1571 10.3212 15.4408 9.92861 14.6235C9.53598 13.8061 9.33244 12.9092 9.33339 12.0006V12.0006Z" fill="#EB001B" />
            <Path d="M21.2005 12.0005C21.2005 13.1262 20.8872 14.2292 20.2965 15.1833C19.7057 16.1375 18.8614 16.9043 17.86 17.3963C16.8585 17.8882 15.7404 18.0853 14.6334 17.965C13.5265 17.8448 12.4753 17.4121 11.6 16.7164C12.3064 16.155 12.8776 15.4388 13.2703 14.6217C13.663 13.8047 13.8671 12.9081 13.8671 11.9997C13.8671 11.0912 13.663 10.1947 13.2703 9.37761C12.8776 8.56054 12.3064 7.84433 11.6 7.283C12.4753 6.58726 13.5265 6.15455 14.6335 6.03432C15.7404 5.91409 16.8586 6.1112 17.86 6.60311C18.8614 7.09502 19.7058 7.86189 20.2965 8.81606C20.8872 9.77022 21.2005 10.8732 21.2005 11.9989V12.0005Z" fill="#F79E1B" />
        </Svg>
    );
}






