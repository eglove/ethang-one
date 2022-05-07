interface BodyOneProperties {
  skinColor: string;
  clothesColor: string;
}

export function BodyOne({
  skinColor,
  clothesColor,
}: BodyOneProperties): JSX.Element {
  return (
    <g>
      <path
        clipRule="evenodd"
        d="M1132.91 1274.42c-10.42-94.38-26.18-191.2-65.97-278.624-13.68-113.054 9.36-274.969-95.341-351.205 1.339-13.536-22.91-25.2-34.152-32.425-18.26-11.967-42.958-35.479-64.572-22.307-6.819-2.082-23.634 6.439-31.375-12.042-7.929-18.931-6.777-56.89-13.1-60.355 2.79-27.355-120.133-45.658-152.216-6.992-15.234 29.658 2.264 39.098-32.085 78.085-15.169.932-29.638 4.779-43.628 10.053-11.551 1.599-23.041 3.542-34.479 5.565-145.887 13.507-156.916 121.502-169.846 237.474-11.071 155.785-59.16 310.993-38.37 468.003-11.491 56.14-12.246 116.05 1.475 171.66-44.989 65.73-12.378 102.1 15.681 164.6 4.749 11.24 8.882 22.82 10.984 34.82-.555 9.29-.493 18.59 1.14 27.82 4.762 21.02 39.787 18.08 41.348-3.16 2.739-13.95 1.89-28.41 4.015-42.43-.124.73-.339 2.13-.339 2.24 5.137-35.27 13.417-48.95 36.288-75.86 29.366-42.47 11.308-95.84 18.01-143.37 1.837-15.88 4.266-31.55 5.891-47.47 9.903 5.83 20.666 10.69 31.913 13.73-7.086 54.69 5.239 109.65 18.942 162.55 37.09 136.29 86.262 276.24 64.904 419.27.01-.07-23.288 116.89-41.689 174.62-22.249 73.22-40.162 146.56-71.639 216.76-16.859 50.53-52.526 98.47-51.141 152.87-12.314 18.22 9.858 40.1 29.397 40.05 0 24.66-13.02 71.13-13.02 71.13-2.045 17.23-10.855 39.17 2.464 53.8-18.107 46.13-24.469 96.04-29.438 144.86-1.899 23.16-4.076 51.07 20.711 64.2 23.093 9.99 49.977 5.6 74.636 8.57 23.857.04 48.545 6.29 72.008.89 26.949-7.67 32.374-36.87 27.3-60.21-3.274-24.31-7.196-48.54-11.488-72.71-12.734-52.61-16.298-110.99-32.61-161.6 9.138-1.71 18.309-6.31 24.509-13.03 15.752-.52 27.366-12.24 31.224-26.11 2.786-8.93 14.779-10.77 22.856-13.61 1.511 7.71 5.925 14.2 9.519 21.22-3.07 14.9 7.175 32.32 24.088 32.67 2.443 2.35 4.713 4.74 7.208 6.98-19.233 28.31-33.495 60.28-37.108 93.99-4.353 25.86-8.907 67.3 25.32 74.95 12.922 1.71 26.828 5.02 39.49.31 14.117 6.33 29.127 9.37 44.326 12.08 65.144 11 127.973 10.08 193.659 17.46 17.33 2.41 86.77 9.54 98.33 0 14.09 2.88 5.57-7.63 11.5-17.46 4.72-7.37 17.34-21.5 9.19-25.6-17.08-7.37-32.22-21.87-47.85-30.11-73.053-41.58-230.612-112.38-229.518-114.38-.216 1.41.955-34.18 6.795-43.63 8.216-8.14 24.588-6.71 33.164-14.5 5.442.25 46.272-11.49 42.777-31.17-4.478-15.7 10.152-34.95 0-48.21 33.613-307.05 111.832-604.84 154.992-910.25.96-.84 1.9-1.69 2.86-2.53 22.25 3.72 39.54-18.63 46.3-36.24 3.26-3.3 6.39-6.71 9.26-10.4 18.14-23.58 18.47-54.31 20.53-82.37 4.49-3.3 7.37-8.42 7.62-14.47.72-18.04 1.48-36.08 2.24-54.11.01 0 .01 0 .01-.01 5.58-8.97 6.34-19.06 4.75-29.34.59-33.25 5.71-64.4-8.65-94.99z"
        fill={skinColor}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M438.216 2848.89l8.946 3.62c51.091 20.66 111.051 27.06 176.965 21.27l1.999-.18 11.994-1.09-4.308 11.24c-3.4 8.88-10.119 15.29-19.702 19.48l-.773.33-.245.08c-23.825 8.2-70.912 11.27-109.219 4.44-31.322-5.59-56.774-20.46-58.837-22.46-6.79-6.61-9.585-15.38-8.191-26.61l.073-.56 1.298-9.56zm231.74-81.9l-2.137-10.57 10.651 1.67c72.686 11.41 136.272 18.76 258.381 30.92l60.3 6c32.429 3.26 53.219 5.42 76.969 8.03l5.62.62 1.93 3.1c.19.31.45.59.76.83l.19.13-4.45 13.76-.57.36c-1.05.68-1.74 1.09-2.64 1.49l-.3.14-1.26.55-1.38.06c-79.844 3.64-155.26 1.61-227.257-6.72l-2.633-.31-3.016-.36c-37.924-4.44-149.332-26.55-154.98-30.04-7.349-4.54-12.257-10.88-14.072-19.16l-.106-.5zM1150.51 1383.38c-10.73 7.03-150.24 71.24-304.414 75.13-107.559 2.71-295.097-45.51-349.097-49.51-18.916-1.4-2.808 55.54.463 58.65-1.265 12.02-9.492 32.15-8.594 44.32-15.424-4-63.869-11.97-126.869-43.97-9.021-4.58-14.292-253.04.097-376.49C382 920.727 392.328 764.637 406.999 756c.171 4.344-11.882-116.721 90-136 18.499-3.501 126-28 126-28 44 56 114.017 103 154 103 71 0 111.16-103.239 118-102C1044 620 1031.08 798.326 1067 996c31.36 172.62 80.69 341.1 83.51 387.38z"
        fill="#fff"
        fillRule="evenodd"
      />
      <path
        d="M1058.17 1405.36l10.95-2.94-2.4 17.05-7.5 52.04c-1.47 10.26-82.483 466.18-82.483 466.18s-83.069 515.6-86.982 582.17c-.183 3.11-5.121 46.28-10.678 49.91l-.4.26-.397.25c-1.783 1.1-15.229 10.62-71.279 19.72-31.726 5.15-136.729 14.86-136.729 14.86l.326-9.29c.29-7.93.862-21.29 1.23-30.71l.099-2.58.154-4.31-.178-.04c-2.249-.42-4.438.54-8.282 4.42-6.498 6.55-14.649 19.6-24.896 40.66l-2.938 6.06s-152.848-39.58-186.054-59.55l-1.025-.62-4.657-2.83 1.702-7.22c7.88-33.17 113.143-347.26 125.533-389.03l1.151-3.89.657-2.24c16.985-57.99 47.883-318.67 25.907-396.69-40-142-74.529-300.35-79.401-316.46l-.716-2.35-.725-2.34-3.844-12.33 12.613 2.77c174.189 38.28 356.135 35.17 526.102-9.56l5.14-1.37z"
        fill={clothesColor}
      />
      <path
        clipRule="evenodd"
        d="M675.45 507.191c.336-2.944 4.264-2.899 4.638 0 4.13 35.037-9.704 75.26-43.729 91.588 25.513 22.536 43.469 52.665 74.084 69.678 64.235 41.85 157.063 2.692 171.348-71.113-15.854-3.637-45.395-3.329-50.208-21.852-2.326-2.385-3.525-22.82-3.382-37.891-.145-2.802-.235-5.607-.33-8.39-.243-2.256-.312-4.555-.288-6.868.05-5.017 7.561-4.919 7.876 0 .131 2.017.218 4.059.299 6.111.055.542.13 1.082.196 1.622 1.033 3.753 1.748 7.676 2.592 11.238a269.61 269.61 0 001.428 5.792c.724 5.075 2.02 10.033 4.24 14.728 5.901 12.483 20.452 23.202 34.796 23.318 3.073.024 6.129-.427 9.204-.35 5.008.128 9.1 2.112 13.569 4.133 4.035 1.824 7.824 3.058 11.717 3.052 160.58 54.462 138.47 253.826 162.93 388.615 24.92 133.858 76.42 262.918 84 399.718 2.27 14.18-13.4 19.45-23.11 26.16-2.59 35.69 12.42 71.81 2.01 107.13-9.64 28.88-48.48 98.32-85.6 87.38-42.08 319.88-139.902 616.33-149.156 940.1 9.37 27.07-17.534 46.72-42.349 50.68l-3.383 1.95c-11.314 6.5-23.004 12.85-35.381 16.87-.31.18-.619.36-.934.53-.603.33-1.249.53-1.91.63.693 8.29 3.311 16.07 6.688 23.64 51.487 11.88 96.708 43.06 145.124 63.46 31.231 19.21 126.571 46.97 133.811 80.72l.19 1.03c2.91 15.12-5.22 33.78-22.44 35.21 8.99 6.65 3.1 20.09-6.69 22.68-11.77 3.14-24.54 1.8-36.65 2.77-114.242 3.59-229.493-6.5-340.85-32.12-9.352-2.16-19.092-4.98-26.974-10.57-48.326-38.25 1.975-119.22 13.854-168.84-4.314-.69-8.579-1.63-12.769-2.88l-.937-.28c-4.072-1.23-8.282-2.71-11.445-5.58-.129-.12-.238-.25-.361-.38-20.358-.29.376-45.13 2.207-57.12-8.274 17.62-15.029 36.43-24.938 53.21-6.823 10.35-21.785 3.17-31.834 2.44 3.342 61.34 17.978 121.14 33.011 180.57 12.208 49.35 33.165 108.65-35.993 123.65-47.634 12.48-161.143 7.71-181.447-44.45-5.987-42.47 7.126-85.52 13.612-127.38l1.137-5.95c7.742-40.69 14.9-81.57 26.127-121.5 1.545-6.51 3.448-12.88 5.494-19.21.267-3.69.461-7.39.222-11.09-.313-4.86-1.231-9.61-2.205-14.38-.125-.6-.237-1.3-.352-2.06-20.057-9.25-34.951-19.72-36.873-31.01-1.966-10.72 2.009-21.59 4.957-31.82l.172-.6c64.595-226.88 187.465-431.34 166.526-673.36-7.703-119.03-64.062-228.51-73.572-347.24-5.47-23.68-10.409-47.61-11.204-72.02-3.379-.8-6.783-1.52-10.145-2.39-1.972 10.55-4.466 21.02-8.554 30.88-1.576 19.48-.569 39.17 2.821 58.44.781 4.44-1.38 8.3-5.039 9.72 8.79 27.4 10.524 61.76-12.144 82.98l-1.878 1.24c-19.692 13.12-21.75 16.83-26.331 41.26l-15.077 61.74c-1.891 7.64-4.155 15.43-9.603 21.43-14.456 15.92-37.466 5.53-44.921-11.44-6.804-17.39-6.753-36.52-11.721-54.43-3.776-18.49-14.248-34.29-24.627-49.79-23.202-35.6-25.054-85.17.817-120.03 2.259-5.77 4.328-11.45 6.728-17.12-8.952-10.5-3.19-27.05-4.218-39.91-.017-10.61-.212-21.22-.535-31.83-1.889-62.65-8.34-124.91-8.574-187.57-2.509-84.45 19.709-166.25 32.59-249.081 11.076-81.793 10.486-165.184 28.607-246.023 33.723-158.676 222.96-98.182 254.975-160.711 9.674-15.646 14.005-33.452 16.064-51.464zM444.297 2859.46c-2.863 21.1 11.953 26.16 28.942 32.58 43.316 15.89 93.331 19.66 137.359 4.51 7.802-3.3 13.384-8.24 16.157-15.48-61.104 5.58-125.268 1.52-182.458-21.61zm232.957-93.96c3.834 18.95 28.245 21.18 44.591 24.37 39.035 8.17 78.451 14.73 118.088 19.37 76.809 9.27 154.51 10.86 231.697 7.34 2.08-.9 3.42-2.63 6.05-2.62h.33c.14 0 .28.02.43.02-1.28-.84-2.38-1.96-3.2-3.27-132.668-14.59-266.143-24.52-397.986-45.21zm129.703-162.49c-31.865 5.54-64.389 8.45-96.563 3.42-2.169 26.64-12.477 52.5-20.585 77.99 44.453 11.75 73.873-37.58 113.636-46.97-2.253-11.78-1.454-24.17 3.512-34.44zm-328.429-20.36c.107.18.163.41.142.67-.154 31.03-3.3 61.95-7.871 92.67 28.245-30.45 75.516-38.16 114.448-25.5l-.171-1.98c-1-11.25-2.496-22.76-.663-33.9l-1.784-.5c-20.081-5.54-67.297-16.66-104.101-31.46zm581.782-1170.3c-173.928 46.71-359.065 49.64-534.804 11.02 8.764 28.12 15.346 56.74 19.996 85.76 9.965 74.63 37.415 145.15 55.907 217.86 21.334 85.82 26.417 158.08 15.799 245.74l-.326 2.65c-23.379 196.58-119.116 376.02-164.095 566.86 52.932 32.15 118.32 44.71 179.014 58 38.144-78.71 70.376-159.42 91.498-244.17 76.091-266.01 176.353-516.48 154.083-797.33-4.965-3.26-3.35-10.13-.621-14.53-.943-20.26-2.248-40.5-4.384-60.65-.071-.68 1.069-.82 1.209-.16 3.531 17.26 7.239 34.47 10.341 51.82 21.383-21.77 35.211-48.98 54.016-72.6 2.676 17.63-33.981 85.95-50.111 96.52 34.369 211.19-22.864 404.52-84.68 605.37-41.597 144.22-82.013 288.86-124.93 432.68l1.562.03c-2.581-4.75 52.04-1.47 56.525-3.86 40.225-3.81 79.595-13.34 118.72-22.9l4.801-1.24c9.748-2.57 21.065-6.25 22.818-16.68l.026-1.31c.011-.39.029-.7.061-.73l-.281-1.17c-.061-.27-.102-.48-.093-.55l-.389-.58c-.448-.64-.869-1.22-.272-.56-4.419-4.83-4.82-12.3.281-16.92 9.56-351.29 122.639-672.8 164.519-1020.16 4.15-32.79 9.22-65.47 13.81-98.21zm-692.8 68.02c-20.11 24.99-23.564 59.86-15.636 90.32 4.164 15.11 12.581 27.84 21.259 40.8 15.218 21.61 22.316 46.72 26.187 72.45l.109.49c1.766 8.27 2.862 31.09 14.541 28.52 3.067-1.97 4.537-10.64 5.616-15.18l13.482-55.22c3.903-15.98 6.244-34.98 20.072-46.05l1.634-1.04c11.296-7.27 22.314-15.7 24.087-29.86 3.891-17.36-3.344-34.17-6.047-51.04-36.063-8.26-71.272-19.9-105.304-34.19zm765.4-71.35l-1.21.6c-13.87 6.91-55.26 29.29-65.93 20.69.25 51.15-3.84 102.05-9.84 152.79 1.53-.34 3.11-.3 4.53.22 30.09-8.33 62.79-65.24 65.31-94.48 2.06-26.62-3.23-54.38 7.14-79.82zM638.194 625.077l-1.532-2.029c-16.29-21.44-25.432-29.097-53.601-17.657 3.786 4.687 5.569 10.968 3.954 17.472l-.107.416c-8.888 36.571-54.478 57.76-87.847 37.862-11.659 3.035-23.815-5.347-24.284-17.227-33.021 19.44-48.278 55.058-54.47 90.831 21.676-11.412 50.824-.52 59.475 22.175 18.962 41.476-36.297 84.624-69.995 49.697-7.302 69.96-10.729 140.456-24.029 209.683 9.857-16.21 33.359-20.025 47.373-6.68 45.887 39.61-6.89 129.61-62.361 86.71-6.723 38.54-9.095 77.62-8.78 116.61 17.775-6.85 27.506 23.87 28.795 36.88 1.609 15.65-6.471 48.47-25.405 50.32l1.557 25.03c2.646 42.9 4.997 85.75 4.408 128.76.952.24 1.763.67 2.442 1.23.049 1.25.214 2.49.45 3.72.233 1.22 1.008 1.86 1.921 2.06l.031.05c-.042.86-.21 1.73-.533 2.54 34.754 14.55 70.631 26.57 107.173 36.03-.897-12.17-.67-24.3.595-36.32-13.816-13.14 3.178-60.83 4.807-79.37 6.385-37.15 11.244-74.52 15.539-111.95-12.826-1.1-19.393-14.49-22.765-25.39-4.397-12-7.048-24.81-3.953-37.43 3.141-15.02 19.971-29.38 35.843-24.09l1-10.06c6.284-63.74 11.776-127.59 21.184-190.978-30.727 17.148-59.742-20.14-52.321-49.081 2.173-12.286 9.655-24.191 20.693-30.574 9.764-5.611 29.946-11.171 36.348 1.176 2.998.384 5.809 1.847 7.931 4.006 6.638-34.376 14.712-69.018 27.559-101.6-40.608-25.508-33.012-89.735 20.434-89.82 72.072 6.173 52.899 111.313-16.614 91.541-21.834 131.582-34.416 264.25-45.583 397.05 8.404 13.69 7.073 34.02-4.459 45.55-5.015 48.04-11.1 95.98-19.093 143.63 52.871 11.78 106.393 21.53 160.497 26.02 2.601-16.73 20.805-25.66 36.537-27.01 10.417-1.12 21.75 2.84 31.701 4.73 12.023 4.6 21.86 15.18 26.253 26.72 50.507.3 101.044-2.89 151.079-9.43-5.053-25.17 31.581-44.36 53.885-40.44 8.926 1.09 17.634 4.47 24.324 10.5 6.53 1.39 12.67 7.03 14.3 13.82 17.71-4.21 35.86-7.42 52.97-13.68 16.79-5.51 22.28-19.33 17.93-35.67-47.5 19.02-87.796-56.45-42.47-83.75 5.8-4.29 17.89-7.07 21.29 1.05.58.1 1.15.22 1.72.36-3.77-15.53-7.56-31.05-11.35-46.58-21.78-2.08-29.05-34.03-10.97-45.25-6.15-25.75-12.12-51.56-17.72-77.43-29.843 6.15-54.579-30.97-48.264-57.78l.201-.81c3.565-14.57 14.412-28.9 30.433-31.33-3.783-21.895-7.166-43.869-10.014-65.915-4.128-4.393-5.976-10.944-4.369-16.741 1.164-42.378-7.433-86.012-3.968-128.995-31.668 38.478-97.652 12.287-82.58-38.487-.881-47.035 65.994-63.705 88.545-22.123 2.415-8.87 5.519-17.695 7.038-26.84.231-1.051 1.852-.838 1.948.147l.005.112c3.365 60.15.887 120.692 7.345 180.776 24.13 1.186 33.99 58.722 7.77 62.852 9.92 66.894 24.81 132.914 40.99 198.624 28.12-7.22 39 53.2 15.85 63.36 6.73 26.71 13.44 53.42 19.98 80.18l.13-.06c3.4-5.84 12.46-5.19 18.29-4.07 19.24 7.09 11.1 41.9-9.85 39.77 11.43 34.38 4.19 66.28-33.95 78.1l.02 1.09c1.19-.92 2.62-1.67 4.36-2.16 23.83-6.68 46.08-17.07 66.61-30.54-6.04-99.28-34.79-195.52-58.06-291.81-26.73-4.26-35.26-47.07-14.4-62.84-14.44-63.935-18.6-129.315-25.67-194.245-19.25-4.196-24.12-35.084-6.73-44.545-11.02-80.635-52.501-148.605-129.9-183.172-2.509 11.477-6.674 22.621-12.247 33.051.522.029 1.027.092 1.521.175.129.231.286.46.499.679 4.192 4.286 6.878 9.109 8.581 14.272.165 1.11.348 2.218.536 3.325a13.78 13.78 0 01-.638 1.342c8.293 31.508-30.574 47.614-56.817 40.566-4.069-.8-6.727-3.078-8.146-5.959-46.462 24.968-107.1 19.706-148.955-13.307-30.422 16.238-69.591-21.683-47.85-51.425zM420.17 1331.51c44.456-6.54 58.997 64.86 23.167 84.69-11.553 6.85-27.439 7.45-38.814-.13-30.287-18.32-21.863-80.8 15.647-84.56zm169.219-42.72c56.579-.25 61.419 86.5 12.068 102.11-36.7 10.59-72.65-30.04-53.829-63.92 1.739-21.08 19.993-37.89 41.761-38.19zm176.297 7.87c2.943-22.41 26.456-43.82 50.121-37.65 21.685 5.46 27.34 30.72 31.185 49.42 8.743 38.73-35.295 77.99-72.401 56.67-23.703-14.13-27.168-48.71-8.905-68.44zm126.364-130.77c7.931-12.57 25.697-18.11 40.201-13.73 39.781 12.65 35.055 76.13 3.044 95.06-54.989 28.65-98.844-53.72-43.245-81.33zm-259.087 37.09c-.93-37.73 38.172-72.07 74.903-50.62 59.451 39.66-1.433 130.65-58.474 79.65-10.166-6.53-16.173-17.13-16.429-29.03zm-73.962-96.26c-27.515-42.66 19.741-105.9 64.839-65.03 15.467 15.81 14.776 44.79 5.822 63.58-14.566 25.1-55.017 25.68-70.661 1.45zm199.797-80c21.473-20.52 58.994-20.74 75.309 6.34 19.339 33.4-3.741 90.55-47.336 87.84-45.295-3.2-57.704-66.59-27.973-94.18zm-112.505-66.704c-34.456-35.137 2.955-91.5 49.685-77.927 76.372 27.975 10.091 133.241-49.685 77.927zm188.086-7.927c-30.69-55.731 43.864-105.841 81.806-52.199 29.101 48.584-49.466 104.67-81.806 52.199zM734.278 793.55c-26.555-46.452 19.851-98.068 68.608-70.804 69.38 47.966-19.428 140.216-68.608 70.804z"
        fill="#000"
        fillRule="evenodd"
      />
    </g>
  );
}
