import styles from './svgImage.module.scss'

function SvgImage({fill, alt, selected, callback}: {fill: string, alt: string, selected: string, callback: (event: React.MouseEvent, color: string) => void}) {
    return (
        <div title={alt} onClick={(event) => callback(event, alt)}>
            <svg className={`${styles.svg} ${selected === alt ? styles.svgBlackStroke : styles.svgWhiteStroke}` } xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <g filter="url(#filter0_d_2_14)">
                    <circle cx="24" cy="24" r="20" fill={fill} />
                    <circle cx="24" cy="24" r="18" stroke="none" stroke-width="4"/>
                </g>
                <defs>
                    <filter id="filter0_d_2_14" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_14"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_14" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default SvgImage;