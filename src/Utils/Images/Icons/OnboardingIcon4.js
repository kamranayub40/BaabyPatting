import * as React from "react"
import Svg, {
  Rect,
  G,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
  ClipPath
} from "react-native-svg"

function OnboardingIcon4(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={327}
      height={193}
      viewBox="0 0 327 193"
      fill="none"
      {...props}
    >
      <Rect
        x={0.5}
        width={326}
        height={193}
        rx={16}
        fill="url(#paint0_radial_436_10317)"
        fillOpacity={0.25}
      />
      <Rect x={108.5} y={18.5} width={110} height={110} rx={31} fill="#fff" />
      <Rect
        x={108.5}
        y={18.5}
        width={110}
        height={110}
        rx={31}
        fill="url(#paint1_linear_436_10317)"
        fillOpacity={0.4}
      />
      <Rect
        x={108.5}
        y={18.5}
        width={110}
        height={110}
        rx={31}
        stroke="#fff"
        strokeWidth={2}
      />
      <G clipPath="url(#clip0_436_10317)" fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M162.794 54.176a1.5 1.5 0 011.412 0l22.5 12a1.5 1.5 0 010 2.647l-9.256 4.937v-.66a3.45 3.45 0 00-1.826-3.043l-10.5-5.601a3.45 3.45 0 00-3.248 6.088l8.674 4.627v2.269l-6.344 3.383a1.5 1.5 0 01-1.412 0l-22.5-12a1.5 1.5 0 010-2.646l22.5-12zM175.5 74.8l-3 1.6V74l-9.706-5.177a1.5 1.5 0 011.412-2.646l10.5 5.6c.489.26.794.77.794 1.324V74.8z"
          fill="#5B53FC"
        />
        <Path
          d="M162.176 66.794a1.5 1.5 0 012.03-.617l10.5 5.6c.489.26.794.77.794 1.324V94.5a1.5 1.5 0 01-3 0V74l-9.706-5.177a1.5 1.5 0 01-.618-2.029z"
          fill="#9A81FF"
        />
        <Path
          d="M170.55 80.29l-6.344 3.383a1.5 1.5 0 01-1.412 0L145.5 74.45v6.228c-.001.732.266 1.44.75 1.99l.01.01C148.559 85.236 154.105 90 163.5 90c2.652 0 4.997-.38 7.05-.982V80.29zm4.95 6.61c-.901.521-1.9 1.015-3 1.449V79.25l3-1.6v9.25zm1.95-1.268a21.197 21.197 0 003.291-2.955l.009-.01c.484-.55.751-1.257.75-1.989V74.45l-4.05 2.16v9.022z"
          fill="#9A81FF"
        />
      </G>
      <Path
        opacity={0.8}
        d="M115.204 170.5v-14.545h9.63v2.535h-6.555v3.466h5.916v2.535h-5.916v6.009h-3.075zm15.77.213c-1.103 0-2.057-.234-2.862-.703a4.823 4.823 0 01-1.854-1.974c-.435-.848-.653-1.831-.653-2.948 0-1.127.218-2.112.653-2.954a4.76 4.76 0 011.854-1.975c.805-.473 1.759-.71 2.862-.71 1.103 0 2.055.237 2.855.71a4.737 4.737 0 011.861 1.975c.436.842.654 1.827.654 2.954 0 1.117-.218 2.1-.654 2.948a4.8 4.8 0 01-1.861 1.974c-.8.469-1.752.703-2.855.703zm.014-2.344c.502 0 .921-.142 1.258-.426.336-.289.589-.682.76-1.179.175-.497.262-1.063.262-1.697 0-.635-.087-1.201-.262-1.698-.171-.497-.424-.89-.76-1.179-.337-.288-.756-.433-1.258-.433-.506 0-.932.145-1.278.433-.341.289-.599.682-.774 1.179-.171.497-.256 1.063-.256 1.698 0 .634.085 1.2.256 1.697.175.497.433.89.774 1.179.346.284.772.426 1.278.426zm7.323 2.131v-10.909h2.933v1.903h.114c.199-.677.532-1.188 1.001-1.534a2.636 2.636 0 011.62-.525c.151 0 .314.009.49.028.175.019.329.045.461.078v2.685a3.868 3.868 0 00-.589-.114 5.33 5.33 0 00-.689-.05 2.42 2.42 0 00-1.193.292 2.133 2.133 0 00-.824.795 2.296 2.296 0 00-.299 1.179v6.172h-3.025zm8.184 0v-10.909h2.883v1.925h.128a3.022 3.022 0 011.136-1.513c.531-.369 1.165-.554 1.904-.554.748 0 1.385.187 1.91.561.526.369.876.871 1.051 1.506h.114a2.902 2.902 0 011.207-1.499c.587-.379 1.281-.568 2.081-.568 1.018 0 1.845.324 2.479.973.639.644.959 1.558.959 2.741v7.337h-3.019v-6.74c0-.606-.161-1.061-.483-1.364-.322-.303-.724-.454-1.207-.454-.549 0-.978.175-1.286.525-.307.346-.461.803-.461 1.371v6.662h-2.933v-6.804c0-.535-.154-.961-.462-1.278-.303-.318-.703-.476-1.2-.476-.337 0-.64.085-.909.255a1.762 1.762 0 00-.633.704c-.156.298-.234.648-.234 1.051v6.548h-3.025zm21.352.206c-.696 0-1.316-.121-1.86-.362a2.993 2.993 0 01-1.293-1.087c-.312-.483-.469-1.084-.469-1.804 0-.606.112-1.115.334-1.527a2.71 2.71 0 01.909-.994 4.39 4.39 0 011.307-.568 9.936 9.936 0 011.548-.27 39.931 39.931 0 001.534-.185c.389-.061.67-.151.846-.27.175-.118.262-.293.262-.525v-.043c0-.45-.142-.798-.426-1.044-.279-.246-.677-.369-1.193-.369-.544 0-.978.12-1.3.362a1.666 1.666 0 00-.639.895l-2.798-.227a3.799 3.799 0 01.838-1.719c.417-.488.954-.862 1.612-1.122.663-.266 1.43-.398 2.301-.398.606 0 1.186.071 1.74.213a4.559 4.559 0 011.485.66c.435.299.779.682 1.03 1.151.25.464.376 1.02.376 1.669v7.358h-2.869v-1.513h-.086a3.061 3.061 0 01-.703.902 3.246 3.246 0 01-1.058.604c-.412.142-.888.213-1.428.213zm.867-2.088c.445 0 .838-.088 1.179-.263.341-.18.608-.421.803-.724a1.87 1.87 0 00.291-1.03v-1.158a1.603 1.603 0 01-.391.171 7.44 7.44 0 01-.547.135c-.203.037-.407.073-.611.106l-.554.078a3.72 3.72 0 00-.93.249 1.485 1.485 0 00-.618.461c-.147.19-.22.427-.22.711 0 .412.149.726.447.944.303.213.687.32 1.151.32zm13.427-9.027v2.273h-6.57v-2.273h6.57zm-5.078-2.614h3.025v10.171c0 .279.043.497.128.653a.706.706 0 00.355.32c.156.061.336.092.54.092.142 0 .284-.012.426-.035.142-.029.251-.05.327-.064l.476 2.251a8.494 8.494 0 01-.64.163 5.043 5.043 0 01-1.001.121c-.729.029-1.368-.069-1.918-.291a2.68 2.68 0 01-1.271-1.037c-.303-.469-.452-1.061-.447-1.776v-10.568zm7.049 13.523v-10.909h3.025V170.5h-3.025zm1.52-12.315c-.45 0-.836-.149-1.158-.448a1.45 1.45 0 01-.476-1.086c0-.417.159-.775.476-1.073a1.63 1.63 0 011.158-.454c.449 0 .833.151 1.15.454.322.298.483.656.483 1.073 0 .421-.161.783-.483 1.086a1.616 1.616 0 01-1.15.448zm8.858 12.528c-1.103 0-2.057-.234-2.862-.703a4.817 4.817 0 01-1.854-1.974c-.436-.848-.653-1.831-.653-2.948 0-1.127.217-2.112.653-2.954a4.753 4.753 0 011.854-1.975c.805-.473 1.759-.71 2.862-.71 1.103 0 2.055.237 2.855.71a4.744 4.744 0 011.861 1.975c.435.842.653 1.827.653 2.954 0 1.117-.218 2.1-.653 2.948a4.807 4.807 0 01-1.861 1.974c-.8.469-1.752.703-2.855.703zm.014-2.344c.502 0 .921-.142 1.257-.426.336-.289.59-.682.76-1.179.175-.497.263-1.063.263-1.697 0-.635-.088-1.201-.263-1.698-.17-.497-.424-.89-.76-1.179-.336-.288-.755-.433-1.257-.433-.507 0-.933.145-1.278.433-.341.289-.599.682-.774 1.179-.171.497-.256 1.063-.256 1.698 0 .634.085 1.2.256 1.697.175.497.433.89.774 1.179.345.284.771.426 1.278.426zm10.348-4.176v6.307h-3.025v-10.909h2.883v1.925h.128a3.038 3.038 0 011.214-1.506c.569-.374 1.257-.561 2.067-.561.758 0 1.418.166 1.982.497a3.385 3.385 0 011.314 1.42c.312.611.468 1.34.468 2.188v6.946h-3.025v-6.406c.005-.668-.166-1.189-.512-1.563-.345-.379-.821-.568-1.427-.568-.407 0-.767.088-1.08.263a1.834 1.834 0 00-.724.767c-.171.331-.258.731-.263 1.2z"
        fill="#000"
      />
      <Defs>
        <RadialGradient
          id="paint0_radial_436_10317"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 96.5 -163 0 163.5 96.5)"
        >
          <Stop stopColor="#9F9AFD" />
          <Stop offset={1} stopColor="#9F9AFD" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient
          id="paint1_linear_436_10317"
          x1={163.5}
          y1={17.5}
          x2={163.5}
          y2={129.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EBEBFE" stopOpacity={0} />
          <Stop offset={1} stopColor="#EBEBFE" />
        </LinearGradient>
        <ClipPath id="clip0_436_10317">
          <Path
            fill="#fff"
            transform="translate(139.5 49.5)"
            d="M0 0H48V48H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default OnboardingIcon4