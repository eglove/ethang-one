interface HeadZeroProperties {
  skinColor: string;
}

export function HeadThree({ skinColor }: HeadZeroProperties): JSX.Element {
  return (
    <g>
      <path
        d="M762.041 126.638c56.781 0 139.891 38.333 146.141 75.214 7.365 43.463 23.724 206.894 14.818 260.375-8.906 53.482-43.635 92.998-120.433 92.998-76.799 0-134.12-42.342-147.282-56.88-13.161-14.539-29.109-59.78-29.109-59.78s-42.048-7.206-42.243-41.093c-.195-33.888 21.123-44.36 21.123-44.36s-11.505-140.579 12.677-175.397c24.181-34.818 87.528-51.077 144.308-51.077z"
        fill={skinColor}
      />
      <path
        d="M933.472 305.662c3.109 34.162 4.279 68.617 4.88 102.91.58 32.493-2.25 66.382-20.561 94.164-16.009 24.305-40.389 41.947-67.54 51.47-15.45 5.43-32.559 7.441-48.879 7.937-8.43.253-16.88-.111-25.26-.991a208.88 208.88 0 00-3.173-.302c-7.098-.64-14.138-1.275-19.308-6.694-1.63-1.709-1.609-5.217.801-6.329 4.59-2.113 7.699-2.335 12.73-1.638 4.169.575 8.35 1.031 12.549 1.325 9 .637 18.061.657 27.061-.041 16.54-1.284 33.46-6.006 48.479-13.163 23.55-11.242 43.781-29.664 54.701-53.836 12.519-27.676 11.89-59.682 11.304-89.484l-.024-1.223c-.651-33.059-1.86-66.018-4.7-98.966-1.077-12.465-2.61-24.863-4.144-37.264a3651.57 3651.57 0 01-1.286-10.476 345.756 345.756 0 00-3.971-25.214c-.49-2.522-1.065-5.023-1.64-7.522-.432-1.88-.864-3.758-1.259-5.641-.67.11-1.351.171-2.05.201-4.181.142-8.75-.889-11.851-3.892-1.189.819-2.7 1.335-4.519 1.426-11.116.555-22.346.308-33.55.061-6.122-.135-12.236-.27-18.32-.273-17.28-.01-34.57 0-51.861.05-2.636.008-5.273.018-7.911.028-14.644.057-29.312.114-43.938-.281-3.1-.083-6.219-.138-9.35-.193-13.1-.229-26.39-.461-39.19-2.86-5.33 19.149-5.141 40.187 5.97 57.294 3.139 4.822.589 10.504-3.5 13.517-4.181 3.074-11.696 7.788-18.126 8.273a322.68 322.68 0 01-.753 1.695c-.377.845-.753 1.688-1.118 2.53-3.069 7.07-5.834 14.184-7.769 21.669a167.184 167.184 0 00-2.577 11.726c.059.69.12 1.38.193 2.068 0 .071.01.141.02.222.04.284.09.607.12.789l.271 1.458a364.5 364.5 0 00.849 4.477 169.49 169.49 0 012.16 14.507c.93 8.898.84 20.464-7.74 25.731-4.59 2.821-10.09 2.527-14.941.636-2.704-1.056-5.072-2.475-7.513-3.939-.501-.3-1.005-.602-1.516-.903a61.06 61.06 0 00-2.397-1.322c-1.009-.537-2.015-1.073-2.984-1.681a10.57 10.57 0 01-1.369-1.051c-3.25.698-6.421 2.002-8.2 2.891-4.771 2.397-8.96 5.864-12.521 9.848-7.569 8.482-9.839 20.432-8.779 31.523.989 10.322 5 22.18 13.069 29.046 3.51 2.991 7.891 4.741 12.521 4.691 2.279-.021 4.38-.506 6.58-1.092.939-.249 1.972-.359 3.005-.468 1.356-.143 2.71-.286 3.845-.745 2.969-1.204 6.63 2.466 5.42 5.479-.269.669-.504 1.316-.731 1.94-.541 1.488-1.036 2.849-1.84 4.096 8.281 13.669 17.351 26.913 27 39.621 6.119 8.049 12.999 15.197 19.911 22.378 2.916 3.029 5.837 6.064 8.709 9.175 4.271 4.631 6.051 13.75-1.679 15.73-6.799 1.758-12.082-4.545-16.274-9.546-.561-.67-1.103-1.317-1.627-1.917-18.349-21.1-32.219-45.324-38.71-72.671-2.929 2.103-6.29 3.245-9.83 3.741a31.619 31.619 0 01-20.359-4.034c-23.401-13.659-29.061-50.57-18.101-73.702a41.602 41.602 0 0111.306-14.403 3.413 3.413 0 01-.282-2.487c.423-1.598.888-3.177 1.376-4.751-.533-.239-.923-.735-.849-1.471.372-3.849.737-7.698 1.101-11.548l.199-2.1c-.046-2.086-.108-4.172-.17-6.258-.143-4.788-.287-9.58-.231-14.397.056-5.125.229-10.248.402-15.371.199-5.892.398-11.784.419-17.678.065-19.092.479-38.173.894-57.255.42-19.336.84-38.673.896-58.02.059-18.795.099-37.619-.391-56.403a17.715 17.715 0 01-.01-.394 21.452 21.452 0 00-.009-.354c-.061-2.306-.206-4.731-.355-7.219-.819-13.74-1.755-29.425 10.555-37.66 2.39-1.597 5.37-1.617 7.97-.586 7.48-5.267 16.86-7.806 25.83-9.272 13.223-2.158 26.535-3.452 39.854-4.746 3.895-.38 7.792-.758 11.686-1.158 8.979-.92 18.429-1.273 27.469-1.07 4.703.103 9.438-.068 14.18-.24 4.474-.163 8.955-.325 13.421-.256 10.439.172 20.96.566 31.439 1.435.245-.025.491-.047.738-.07.249-.023.497-.046.743-.071 15.876-1.54 31.731-.725 47.594.089 3.842.197 7.683.394 11.526.558 18.779.799 38.609 2.76 55.47 11.848 2.168 1.166 4.005 2.493 5.572 3.971 2.197.312 4.292.942 6.175 2 5.428-1.108 11.488 1.35 12.772 7.719 1.87 9.331 2.58 18.743 1.46 28.207-.015.119-.029.241-.042.367-.012.108-.024.218-.038.33 2.267 8.78 2.116 18.368.232 27.027a493.577 493.577 0 011.31 32.868c.01 1.657.033 3.322.057 4.989.084 5.956.169 11.956-.376 17.858-.614 6.643-3.318 11.899-7.573 16.944-.802.95-2.157 1.108-3.284.877a4.105 4.105 0 01-.776-.236c2.1 4.55 3.839 9.327 5.541 14.001.377 1.036.753 2.067 1.13 3.09 3.3 8.957 6.5 18.066 8.769 27.347 4.601 18.713 7.63 37.781 9.391 56.98zm-318.667 84.689c-.95-.663-1.907-1.331-2.943-1.827-.13-.062-5.61-1.86-4.55.515.36.789-.58 1.668-1.25.971-1.9-1.951-.84-4.297.97-6.036 3.269-3.144 8.15-2.417 12.16-1.668 5.58 1.041 11 3.508 15.7 6.673 5.06 3.407 11.31 8.128 12.31 14.588.91 5.935-4.93 12.476-10.94 8.503-3.252-2.154-5.529-5.356-7.814-8.57-1.629-2.29-3.263-4.587-5.256-6.514-2.351-2.265-4.891-4.257-7.58-6.077-.27-.183-.538-.371-.807-.558z"
        fill="#000"
      />
    </g>
  );
}