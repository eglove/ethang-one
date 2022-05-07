interface BodyOneProperties {
  clothesColor: string;
  skinColor: string;
}

export function BodyThree({
  clothesColor,
  skinColor,
}: BodyOneProperties): JSX.Element {
  return (
    <g clipRule="evenodd" fillRule="evenodd">
      <path
        d="M393.818 1031.13c-26.787 31.39-24.419 40.11-10.147 71.8 31.531 73.53 76.743 148.28 128.066 216.46-3.388-152.97-6.302-306.77-11.313-461.127-30.517 59.643-63.016 113.517-106.606 172.867m-5.054 1890.54c-16.861-1.63-135.528 2.76-103.77-31.9-9.803-21.32 17.584-39.31 34.46-55.53 15.79-15.09 31.351-31.86 47.565-51.25 15.099-17.99 32.12-39.25 43.124-64.06 2.436-3.89 4.91-6.61 7.36-8.1l1.413-.86.88-1.4c9.287-14.85 16.955-30.19 25.394-45.32-20.639-7.47-39.391-14.97-62.768-25.34 32.986-194.6 82.423-384.19 114.388-579.37 19.456-169.84 29.901-341.27 74.423-508.54l5.696.44 3.174-10.96c-4.676-.13-14.149-.44-18.839-.63l1.098 5.61c-21.224-2.46-42.022-8.52-62.655-13.66-10.53-1.44-21.087-8.99-17.298-21.56 1.219-18.24 4.986-36.04 6.759-54.27-6.715-4.59-13.642-9.84-20.277-15.21-17.546 8.29-38.753 35.05-57.939 28.24-44.837-60.29-82.466-132.76-116.518-190.66-82.245-133.9-108.349-217.6-23.524-357.222 73.337-116.965 152.445-302.868 299.463-332.222 16.506-3.087 33.802-3.217 49.665-10.751.814-10.803 6.202-17.009 10.146-17.097 9.58-2.107 20.099-5.497 29.454-5.583 3.298-1.38 7.324-.246 10.492.377 9.429-18.959 8.586-43.163 18.918-60.936.375-13.466 4.472-28.344 45.898-31.051 28.199-2.358 68.138-4.63 90.679 7.714 15.772 12.721 15.935 41.219 13.957 61.299-2.173 14.747-1.201 31.898 10.327 49.218 32.855-10.161 55.766 11.317 76.333 51.386 86.098 11.743 104.658 18.412 138.068 103.85 15.93 37.051 32.52 76.635 44.93 117.196 16.64 49.586 18.1 101.49 34.27 151.422 43.91 110.06 88.56 181.09 102.62 309.21 6.87 56.57 2.92 84.63-3.6 93.12-18.56-5.37-42.5-9.49-61.99-11.78l20.86 15.89c-17.67 80.28 33.22 309.21-104.78 291.62-1.23-2.99 1.02-19.42 1.62-26.24-3.78.26-10.75.51-14.47.04-6.58 19.03-16.46 36.12-22.7 55.48-3.08 11.79-6.98 23.66-10.79 35.12-86.912 293.24-104.123 575.54-65.339 869.93l-1.753.63-.71 1.27-1.065.4c-2.738 3.66-6.617 3.82-12.806 3.83-38.015 1.34-71.416 3.06-102.391 3.92 3.287 16.48 1.182 33.83-.267 50.59 18.028-1.27 34.568 6.06 51.046 14.86 31.486 15.49 62.844 31.75 93.335 49.53 30.26 19.41 79.21 36 54.91 70.88l7.03 2.76c.23.09.38.18.47.23.83 2.96-8.69 15.22-11.51 15.09-66.556 3.11-123.322-12.46-208.462-28.77-19.492-7.08-117.671-19.13-118.082-37.73.312-5.8 6.292-5.4 10.464-6.13-12.508-63.28 29.774-68.39 35.827-125.81-8.371 1.6-17.422 2.97-25.996.61-7.524-122.53 4.564-247.96-8.802-371.7l-13.589-1.5c-45.678 134.64-93.041 272.39-129.416 412.25-.693 3.03-4.092.96-5.646-.15-23.775-.57-47.557-3.11-70.87-7.12-.56 13.75-1.149 27.76-1.727 41.51l3.593 1.93c2.317 3.23 1.342 18.36.922 24.87-.423 6.65-.773 11.47-.185 15.98 7.498 14.81-18.14 46.91-31.7 64.75-29.544 38.31-54.017 95.04-108.797 87.36"
        fill={skinColor}
      />
      <path
        d="M977.814 1218.39S1106.13 1414.47 1096 1523c-.6 6.43-10.95 106.09-11 113-.35 44.76 18.41 4.84 5 41-10.95 29.53-85.85 204.73-112 460-14.709 143.56 5 505 5 505l-225 14-20-388c-2.934 4.72-139 419-139 419l-106-11-109-42s54.42-227.7 109-544c25.841-149.76 65.386-561.32 65.386-561.32C556.574 1502.73 800 1509 800 1509s-83.144-264.54-23-301c38.112-23.1 200.814 10.39 200.814 10.39z"
        fill="#9DDADB"
      />
      <path
        d="M531.384 2782.65l-1.163 1.78a229.142 229.142 0 00-4.182 6.71l-.78 1.31-2.636 3.94-1.711 2.58c-2.404 3.65-4.977 7.62-8.433 13l-9.515 14.84-3.985 6.17c-9.991 15.4-16.469 24.81-24.072 34.81l-1.965 2.56-1.023 1.28-1.018 1.26c-18.024 22.03-37.504 37.06-59.586 43.39l-.737.21-.689.19-.713.05c-30.856 2.49-61.722-.16-103.578-7.51l-2.687-.48-3.248-.58-7.072-1.3-1.657-1.66c-9.683-9.75-11.012-20.98-5.069-32.18 3.893-7.33 9.872-13.68 20.603-23.02l8.371-7.25c7.712-6.71 8.989-8.02 10.899-10.65l.786-1.09.37-.39c34.645-36.2 63.585-71.07 85.921-112.13l.867-1.6 1.306-2.42 2.563-1.01c20.988-8.2 44.492-7.28 64.169 2.74l.648.33.627.34.648.35c3.31 1.85 6.081 3.86 10.894 7.66l2.697 2.14 1.265.98c4.181 3.23 6.604 4.78 9.539 6.07 5.686 2.5 12.435 2.08 14.712-.37l.124-.14.108-.14 3.017-8.42 5.385 57.65zm237.663-80.21c.989 3.1-2.796 15.34-.048 19.56 2.477 3.8 11.19 2.76 17.235 2.69l1.23-.02 1.258-.03c1.973-.07 4.063-.19 6.791-.38l8.006-.59.67-.04c.215-.02.426-.03.65-.04l1.252-.06.789-.03.3-.02c9.9-.78 18.043-6.19 33.94-12.46l7.4-2.94c7.422-2.93 11.588-4.45 16.609-6l.726-.22.383-.07c14.154-2.76 31.843 2.59 55.868 14.59l1.52.76 1.634.84c3.838 1.96 7.877 4.11 12.424 6.59l7.037 3.87c4.896 2.71 10.952 6.07 13.084 7.24l2.034 1.1 1.85 1c4.606 2.46 8.282 4.32 11.478 5.78l1.053.48.252.14c27.528 14.93 52.808 29.69 76.548 44.8l1.87 1.19.63.34c28.57 15.88 28.97 41.52 2.06 59.34l-.83.54-.86.54-2.07 1.3-2.44-.18c-41.54-2.99-84.501-9.12-131.687-18.38l-4.631-.92c-35.336-7.04-70.205-15.13-119.661-27.48l-9.767-2.44-15.914-4.01-.412-.04c-17.359-1.8-26.979-14.84-26.965-32.83l.01-1.02-.002-.85c-.02-18.88 8.181-36.28 15.169-50.38l.365-.73.372-.72 12.79-9.81z"
        fill="#fff"
      />
      <path
        d="M555.81 1540.45c4.243.2 8.078.37 11.278.59l1.409.1.049.39c.569.01 1.142.03 1.714.05 72.666 2.1 145.616-.35 217.743-9.74l4.491-.59c2.224-.29 4.471-.56 6.726-.83 8.527-1.03 17.17-2.09 25.416-4.08 5.33-.75 8.447-3.56 10.207-7.29 2.188-4.63 2.119-10.86 1.461-16.2l-.096-.74c-8.419-177.71-51.917-349.59-95.419-521.431l-.033-.131c-35.571-140.51-71.136-280.997-87.441-424.648l-4.333 1.096-7.17 1.786c-6.985 1.778-11.927 3.382-15.486 6.244-3.234 2.6-5.417 6.209-6.825 12.009-.824 3.572-1.341 8.017-1.647 13.636-3.15 20.935-3.536 8.843-2.809-5.692.051-1.02.065-2.071.043-3.15-.907.421-1.831.819-2.772 1.189-9.207 3.62-19.047 4.157-28.879 4.693l-.318.018c-5.957.325-11.912.654-17.757 1.61-29.804 5.234-56.065 22.172-79.448 40.723l-1.547 1.233c-89.304 78.94-148.541 186.208-205.765 289.91-2.836 5.141-5.668 10.273-8.499 15.392l-3.651 6.598c-41.894 72.445-61.915 160.975-19.941 237.995 48.42 98.06 104.585 192.59 164.061 284.48 2.682 3.49 5.85 4.45 9.19 4.08 4.028-.46 8.423-3.16 12.471-5.76l.073-.04c1.466-.94 2.886-1.85 4.293-2.62 39.707-23.89 74.139-56.39 100.62-94.4.281-.4.561-.81.841-1.21-.296-.4-.607-.79-.918-1.18-68.819-86.39-132.867-180.75-168.584-285.84-1.714-16.58 13.327-34.75 27.14-51.44.337-.41.673-.82 1.009-1.22 6.881-8.32 13.436-16.26 17.675-23.44 28.189-38.922 54.574-79.174 79.85-120.187a995.752 995.752 0 001.954-3.704l.324-.618a9.102 9.102 0 01-.118-.618c-.23-1.486-.079-3.023.54-4.208.423-.812 1.091-1.445 2.06-1.616.31-.055.606-.055.888-.009l.072-.137.052 1.636 4.047-6.768 2.813-4.666c.502-.829.99-1.633 1.464-2.411l-2.816 5.805-.935 1.927-1.931 3.966c6.585 97.881 8.092 197.018 9.598 296.018l.001.05c.773 50.84 1.545 101.65 3.003 152.23l.019.63.384.51c11.627 15.42 23.594 30.57 35.841 45.48.39.47.779.95 1.169 1.42.503-.35 1.007-.7 1.512-1.04 39.4-27.19 85.748-44.93 133.349-50.42l1.814-.18 5.114-.53c11.798-1.19 26.798-2.44 37.595 1.82 3.679 1.45 6.854 3.55 9.158 6.59 2.038 2.7 3.382 6.11 3.845 10.41-.79 7.1-5.04 11.45-11.184 14.26-9.085 4.17-22.131 5.14-35.247 6.12l-.625.05c-17.517 1.31-34.964 2.82-44.218 10.77-.785.68-1.533 1.42-2.247 2.22.93.39 1.865.78 2.802 1.15 13.167 5.32 27.047 9.21 40.962 13.12l.302.08c23.073 6.48 46.243 12.97 66.386 26.32 5.888 3.44 15.272 11.33 17.702 18.67.708 2.14.793 4.24-.306 6.08-1.022 1.71-2.977 3.14-5.989 4.3-4.938.37-9.966-.64-14.974-1.65l-.294-.05c-3.488-.71-6.967-1.4-10.4-1.69l-.81 3.88c9.322 3.15 17.927 8.44 23.52 16.99 2.083 3.12 3.867 8.05 3.31 12.14-.187 1.37-.65 2.64-1.546 3.65-.76.86-1.826 1.51-3.228 1.91-15.065.39-30.087-2.86-45.021-6.09l-.245-.05c-6.969-1.51-13.919-3.01-20.845-4.15-5.197-.86-10.473-1.53-15.776-2.15l16.656 6.77.966.4c9.063 3.75 20.817 9.05 24.575 16.28 1.164 2.24 1.447 4.68.413 7.32-1.024 2.61-3.242 5.37-6.882 8.33-14.358 7.33-30.754.7-46.29-5.59l-1.034-.41c-7.128-2.88-14.087-5.69-20.623-7.23-23.424-5.46-44.415-2.82-65.009-.19l-.304.03c-30.196 3.85-59.561 7.59-94.799-16.17-.963-.65-1.905-1.3-2.826-1.96-.083 1.15-.176 2.29-.284 3.43-.566 5.99-1.557 12.03-2.551 18.1l-.012.07c-1.962 11.97-3.914 24.01-2.818 35.84.023.24.047.49.072.73.182.19.366.37.552.54 12.239 11.47 46.149 13.28 68.885 14.3h.046zm684.83-137.7c.67-5.79 1.18-11.59 1.54-17.41 5.99-105.99-31.08-208.94-74.44-304.1-25.77-50.09-41.7-103.555-48.38-159.57-12.38-69.615-39.37-135.398-67.02-200.166l-4.34-10.145c-8.45-23.297-21.31-38.571-37.46-48.896-19.606-12.533-44.111-17.733-71.565-21.02a478.784 478.784 0 00-4.044-.467c.693 1.16-17.777-13.262-33.476-36.724-14.424-18.51-17.507-18.705-28.207-19.382l-.4-.025-.022-.002c-3.791-.24-8.604-.546-15.345-1.79a114.4 114.4 0 01-4.583-.94 97.865 97.865 0 002.559 4.021 102.69 102.69 0 008.668 11.148c.072.08.477.438 1.14 1.026 5.283 4.682 26.958 23.888 27.14 32.468 74.012 241.711 77.304 498.424 76.024 749.384l-.084 15.43c1.175 20.93-1.633 41.64-4.438 62.32l-.025.18c-2.629 19.39-5.245 38.75-4.684 58.26.017.56.035 1.12.057 1.67.551.09 1.104.17 1.657.25 41.568 5.99 83.728 6.51 125.468 2.07.41-.04.81-.09 1.22-.13.05-.12.81-.93 1.88-2.05 2.34-2.46 6.14-6.47 6.95-8.07 47.76-71.78 43.74-114.36 43.74-114.36.66-.07 1.34-.16 2.01-.23 32.2-3.75 64.77.86 95.98 8.96.73.19 1.47.38 2.21.58.1-.76.19-1.53.27-2.29z"
        fill={clothesColor}
      />
      <path
        d="M682.068 494.331c8.048-5.458-3.412 41.904-3.432 46.461l-.202.992c-2.006 9.647-5.538 20.87-13.667 27.057 3.749 30.703 8.415 61.308 14.159 91.691l3.379.444c50.121 6.647 100.571 15.786 151.531 11.024 27.456.217 45.632-18.582 56.701-41.899-.75-2.75-1.499-5.489-2.269-8.239-34.868-21.367-61.272-64.729-45.562-105.66.67-1.75 2.75-1.87 3.821-.96.173.016.332.158.319.349l-.557 8.657c-1.066 17.218-1.423 35.016 7.888 50.504 37.938-8.657 61.529 22.995 77.391 52.95l11.395 1.687c43.595 6.48 85.637 14.152 107.167 58.842l2.95 6.276c30.08 64.219 58.11 130.254 74.52 199.405 8.26 36.79 11.25 74.7 23.36 110.578 25.17 66.63 60.62 129.24 79.85 198.22 11.93 24.89 45.5 212.24 12.38 213.66-11.91-3.57-24.04-6.46-36.3-8.51 1.89 1.44 2.58 3.89 2.22 6.39-4.28 30.03-4.6 60.45-4.58 90.73 2.26 73.34.23 231.12-110.14 205.79-8.06-2.97-2.83-15.9-3.15-24.93-.63.03-1.27.02-1.91-.02-6.34 17.11-15.22 32.9-20.79 50.29-4.72 14.94-8.02 31.01-14.6 45.32-69.691 247.99-98.459 508.83-71.213 765.51 1.529 15.37 3.25 30.72 5.171 46.04-.272 9.81 11.159 49.32.92 52.38-.397.78-1.772 1.66-2.591 1.94-6.184 6.68-16.466 4.2-24.631 5.09-28.849 1.28-57.695 2.47-86.559 3.43 1.728 12.26.332 24.69-.691 36.93 21.049.18 40.394 13 59.011 21.7a1385.218 1385.218 0 0181.533 43.71c24.63 17.25 79.67 33.91 60.74 73.03 14.12 5.73-5.51 29.71-16.23 29.98-69.838-.35-139.228-16.2-207.473-30.12-38.776-10.25-81.088-14.15-116.961-31.83-10.183-4.61-8.05-22.98 3.151-24.69-8.317-61.25 25.434-60.41 34.94-111.44-5.526.91-11.63.4-17.171-.73-12.83 11.88-8.116-81.59-9.86-90.72-.348-95.84 4.195-191.88-6.008-287.4l-17.34 51.09c-40.424 119.23-80.242 238.78-111.932 360.67-1.9 7.36-9.62 8.24-14.549 5.03a476.163 476.163 0 01-62.071-5.89c-.399 9.75-.808 19.5-1.218 29.25 8.855 4.77 2.858 34.86 3.989 45.04 9.641 21.99-29.391 64.81-42.04 82.86-22.773 31.84-45.395 76.4-89.438 77.88l-1.342.03c-32.878.81-66.052-1.12-98.611-5.82l-3.962-.65c-9.285-1.55-19.563-3.82-24.908-12.09-4.579-7.08-4.019-16.22 1.54-21.63-7.342-26.66 21.238-42.81 37.201-59.05 29.819-28.79 56.922-60.46 80.36-94.66l1.347-3.19c4.344-10.26 9.535-21.65 17.622-26.56 7.712-12.26 14.307-25.16 21.271-37.83-19.021-6.99-37.75-14.8-56.271-23.02-3.685-1.64-4.857-6.44-4.213-10.01l.046-.24c36.157-187.94 79.506-374.54 113.222-562.91 21.535-173.6 30.363-349.41 75.636-519.2-21.964-2.28-43.824-8.6-65.379-14-17.281-3.68-26.019-12.47-22.611-30.79 1.172-16.28 4.429-32.3 6.19-48.52-4.601-3.22-9.091-6.61-13.461-10.09-8.1 6.05-16.46 11.75-25.049 17.07-20.568 14.83-36.444 17.14-49.15-7.17-36.8-58.19-72.289-117.23-105.781-177.4-31.067-57.71-69.569-115.31-77.455-181.76-11.455-119.59 128.722-310.969 198.945-408.16 38.725-46.814 85.888-94.995 147.221-108.608 18.866-2.799 38.755-3.18 56.74-10.03 1.461-8.752 5.567-16.81 14.841-18.952 9.755-2.16 20.212-5.496 30.039-5.739 2.221-.627 4.842-1.023 7.189-.59 6.725-17.483 7.714-37.182 15.432-54.27zM306.336 2903.83c1.681.83 3.42 1.55 5.201 2.19 2.19.3 4.37.58 6.549.83-3.95-.89-7.87-1.89-11.75-3.02zm218.241-169.96c-32.216 11.71-41.069-43.25-104.43-21.01-24.762 46.02-56.82 87.83-93.462 124.99-13.024 16.21-51.573 34.61-30.799 58.38l3.182.58c36.076 6.57 72.697 11.79 109.458 8.82 27.78-7.67 48.614-29.96 65.451-52.44 12.181-21.61 26.431-41.96 40.978-62.02 7.998-9.97 8.809-22.67 8.772-34.94.269-7.46.55-14.91.85-22.36zm361.89-26.98c-13.678-5.02-27.708-.3-40.15 5.86-21.253 9.52-67.286 20.93-86.95 5.75-9.642 15.97-12.875 33.71-10.23 52.13l.021.86c.206 7.56 1.158 13.7 10.298 14.23l25.63 6.46c86.462 21.73 173.774 42.74 262.774 48.78 23.75-14.85 24.42-34.37-.83-47.96l-6.46-3.96c-49.571-30.36-100.298-60.21-154.103-82.15zm188.103 126.28c-.24.41-.47.82-.71 1.22.37.18.71.44 1.03.72 0-.67-.1-1.33-.32-1.94zm-633.833-162.71c.33 6.75-2.981 14.37-5.311 20.43-1.369 3.58-2.779 8.69-4.96 12.79 54.168-16 70.657 30.88 90.188 21.13l.592-.31v-.01c-3.987-9.12.361-21.96 3.041-31.05-28.446-5.15-56.376-13.16-83.55-22.98zm428.05-14.43l-15.617.48c-24.294.74-48.591 1.39-72.903 1.35 2.544 17.49-2.434 46.35-13.74 59.94-.021.01-.04.01-.05.02 32 4.85 62.307-9.83 90.81-22.17 1.201-13.4 6.457-27.08 11.5-39.62zm-104.5 53.29c-.97 1.82-1.951 3.64-2.93 5.46.43.47.91.9 1.42 1.27-.297-2.27.511-4.52 1.51-6.73zm44.98-1487.75c17.839 90.26 31.921 181.63 36.81 273.66l.044.91c.475 9.31 1.863 19.7-4.354 27.47-6.45 8.07-16.5 9.09-26.03 10.56-79.931 12.18-160.987 16.29-241.79 13.84-29.827 147.84-48.07 297.52-59.197 447.85-24.176 214.8-79.053 424.78-120.154 636.71 63.74 27.92 129.851 47.73 199.711 50.48 98.883-365.92 284.009-752.11 293.869-1118.17.53-.59 1.801-.45 1.941.44 3.259 20.03 1.87 40.93 1.15 61.12-2.735 62.13-9.639 124.23-19.819 185.54-25.846 152.27-73.586 299.6-122.492 445.75-1.638 6.56.84 13.86.922 20.56 10.215 111.77 11.26 224.12 14.55 336.23-.694 12.4 3.201 26.43-1.092 38.07 36.937-4.96 74.058-7.63 111.181-10.73l.277-.18c1.537-.98 3.99-2.01 5.404-.27 31.363-2.47 62.757-4.73 94.138-6.84-44.503-319.06-13.743-651.66 106.664-951.4-7.63-6.99-4.31-22.58-6.05-32.32-1.61-39.75-1.52-80.41 6.28-119.55l-1.99.12c-23.97 1.37-129.449 5.61-132.342-12.32-4.011-30.37 5.679-60.48 7.659-90.63 3.555-68.12 2.696-136.52 2.23-204.73-20.876 2.8-40.891-1.04-61.53-1.83-28.695-.25-57.333.48-85.99-.34zM437.246 2669.21c-.54 2.35-1.169 4.7-1.839 7.05.927-2.1 1.97-4.12 3.211-5.89l.378-.53-1.75-.63zm341.341-11.34l-1.71.02-.009.98c.4.67.469 1.49-.031 2.15-.059 3.02-.189 6.05-.42 9.08.661-4.08 1.321-8.16 2.17-12.23zm-21.73-1l.09 1.52c2.189-.08 4.399.01 6.58-.1 1.149-.06 2.33-.26 3.519-.47-3.429-.11-6.849-.38-10.189-.95zm389.193-1253.31c-1.08 1.27-2.26 2.04-3.46 2.43.01 28.87-5.81 57.26-21.76 82.26-6.64 8.81-10.39 18.84-13.59 29.29-16.87 47.84-20 99.22-13.85 149.31 16.57-24.34 23.16-53.39 27.79-82.04.25-1.44 2.63-1.42 2.89 0 5.6 30.66-4.03 60.77-15.54 89.11-7.19 5.15-5.48 18.63-6.34 26.56 122.19 17.83 79.7-217.07 95.35-289.42.29-1.99 1.98-3.44 3.9-4.05-18.33-2.8-36.9-3-55.39-3.45zm-575.424 144.31c.151.77.281 1.54.38 2.31.221-.75.441-1.51.66-2.27-.339-.01-.689-.02-1.04-.04zm82.58-993.609l-2.138.561c-22.578 5.831-29.885 5.03-31.163 32.329-5.55 37.046-26.038 69.359-35.247 105.181-3.685 12.649.213 35.964 17.678 32.54 5.66-1.74 10.072 5.899 5.791 9.95-12.649 11.979-24.929 24.329-37.28 36.6 49.593 167.6 114.014 330.848 192.489 487.028 3.111 6.2-6.218 11.65-9.308 5.45-78.016-156.68-142.901-319.874-193.261-487.519l-1.522-5.081c-2.225-6.17 26.215-28.29 31.391-35.508-51.926-25.053 20.57-112.79 22.54-155.04-14.862 6.542-31.709 4.194-47.41 6.829-30.119 5.29-56.554 22.711-80.054 41.517-95.448 84.391-156.445 201.228-217.46 311.354-41.553 71.848-61.586 159.688-19.887 236.118 48.384 98 104.511 192.46 163.851 284.15 6.516 8.49 16.545-1.27 23.41-4.83 39.467-23.75 73.69-56.05 100.01-93.83-63.808-78.39-119.389-164.07-158.697-257.41l-.542-1.08c-8.819-17.75-15.793-39.22-1.081-55.94 52.242-67 98.705-138.128 142.43-210.918.451-.731 1.461-.09 1.131.67a792.492 792.492 0 01-14.15 30.29c9.958 147.998 8.276 298.888 12.581 447.828 11.609 15.39 23.56 30.52 35.789 45.41 39.673-27.37 86.341-45.23 134.271-50.76l3.098-.31c20.36-2.1 53.984-6.05 56.653 20.41-3.3 32.56-70.498 14.26-91.983 32.72 35.219 14.21 75.576 18.22 107.91 39.64 10.372 6.06 30.705 25.36 10.841 32.75-8.667.74-17.62-2.63-26.28-3.37 9.747 3.29 18.712 8.86 24.421 17.59 4.109 5.99 7.108 18.42-2.711 20.98-22.387.64-44.681-6.67-66.731-10.31l1.959.8c16.075 6.59 41.059 18.42 19.411 35.87-21.673 11.24-47.912-7.87-69.499-12.97-58.148-13.55-101.162 23.58-160.77-16.62-1.692 13.43-4.232 26.77-5.249 40.28l-.131.77c-2.065 12.32-.297 16.78 12.98 19.13 16.008 4.84 32.775 6.36 49.41 7.26 80.054 4.24 160.641 1.23 240.151-9.04 11.441-3.07 38.316-.17 43.099-12.78-8.962-324.47-143.989-629.776-181.169-950.028-.611-3.081-.652-6.22.428-8.661zm225.691 27.731c-6.385.262-12.33 1.648-18.681 2.29 3.517 7.492 22.081 18.09 20.391 21.809 1.34 1.041 2.7 2.041 4.08 3.01-1.92-6.76-3.86-13.51-5.805-20.271 70.542 172.127 80.233 375.78 89.606 563.55 3.087 94.68 4.767 189.65.199 284.27-2.54 25.13-9.261 50.53-7.431 75.91 41.404 5.97 83.404 6.48 124.974 2.06 1.23-3.23 2.62-6.41 4.19-9.53 62.23-76 29.23-171.25-.73-253.57-18.12.77-36.35-.38-54.48-.16 5.6 17.37 7.04 35.76 10.03 53.72 2.03 12.8 4.62 25.5 7.6 38.11l.8 3.36c1.12 4.65 2.61 9.67.98 14.28-1.6 4.55-7.12 6.39-10.78 2.85-6.6-7.54-5.89-18.76-8.02-28.11l-.4-2.94c-3.63-26.83-8.41-54.66-1.77-81.28-6.52-1.4-24.33 3.75-25.27-5.03.28-14.49-10.215-45.89 1.47-55.44 6.95-5.31 18.9-3.63 27.05-3.96 9.42-.38 18.83-.73 28.24-.67-75.627-183.08-54.6-239.439-46.92-421.648l.23-5.56c-.02-1.201 1.91-1.5 2.12-.29 11.56 74.634-3.85 150.199 3.45 225.069 12.97 142.249 102.95 264.389 117.99 405.959 32.44-3.77 65.26.86 96.71 9.01.66-5.75 1.17-11.52 1.53-17.29 5.97-105.67-31.05-208.3-74.23-303.07-25.88-50.31-41.88-103.998-48.57-160.138-13-73.121-42.18-142.001-71.26-209.927-18.38-50.789-58.116-62.765-107.394-68.663 16.62 27.599 33.141 55.26 49.631 82.94 3.679 8.37-7.6 14.346-12.52 19.499 60.533 33.073 25.193 135.203 26.443 192.431-4.497 52.585-6.192 105.468-14.113 157.688-.58 3.62-6.12 2.56-6.172-.83.731-78.24 10.044-156.172 14.131-234.29l.497-5.695c3.186-36.985 6.307-90.342-38.086-100.493-5.99-.981-6.45-9.901-1.641-12.58 6.401-3.571 12.011-7.931 17.03-13.12-16.959-28.51-33.889-57.04-50.669-85.671l-.787-1.331c-11.919-20.258-22.989-43.831-43.643-56.258zm-144.05 746.278c-4.897-14.45-52.425-5.04-65.11-3.47-46.781 8.85-93.861 29.59-129.491 61.53-2.2 1.97-4.799 1.94-6.849.87-15.959 20.43-34.389 38.94-54.601 55.2 3.7 2.92 7.5 5.75 11.41 8.46 1.871.2 3.561 1.17 4.321 2.91 55.611 40.37 96.52 8.88 154.29 16.15 21.569 4.36 41.431 18.1 63.659 18.68 16.311-3.71 1.949-10.55-5.669-13.19-17.25-8.25-34.836-15.77-52.46-23.19l-14.101-5.92c-6.929-2.91-4.549-13.4 3.191-11.57 13.55 3.2 27.14 6.24 40.739 9.23 26.154 5.35 52.932 12.2 79.361 14.8-5.876-16.36-68.208-34.03-86.332-40.53-6.844-3.24-26.366-2.62-24.138-13.25 1.8-9.89 22.572 1.44 29.5 2.24 28.272 7.19 57.131 11.54 85.939 15.92-30.943-31.1-78.91-33.78-118.429-48.35l-.864-.2c-7.046-1.62-16.937-4.69-11.165-12.78 20.306-29.99 100.198-14.81 96.799-33.54zm-58.47-166.99c14.414-11.85 22.135 12.49 21.22 23.8.68 9.39 1.41 18.78 2.021 28.17-.893 7.34 6.917 34.11-3.531 34.35-45.664-2.32-91.251-1.73-136.93-4.49-.06 9.23-.509 18.45-.039 27.69-.249 11.56 3.759 23.1 1.419 34.52-1.429 5.25-8.559 5.96-11.343 1.48-8.343-19.66-2.607-45.03 3.303-64.92-22.368-4.14-25.453-25.2-19.56-44l-.061-1.02c-.328-5.79-.303-12.01 2.281-16.7 6.908-8.15 21.235-2.85 30.75-3.47 29.169-3.01 58.873-3.84 87.701-9.21 7.462-1.93 15.072-5.83 22.769-6.2zm-181.32-274.568c-22.709 43.426-48.836 84.746-76.65 124.978-5.96 8.59-12.08 17.07-18.298 25.49l-1.15 1.48c-12.427 15.81-25.332 28.92-13.592 49.9 30.764 74.86 71.956 145.15 119.679 210.39-3.022-137.42-5.691-274.87-9.989-412.238zm570.923 301.738c-57.06 11.98-58.13-10.45-48.6 53.03 22.88.16 45.75-.36 68.64.01-6.54-17.73-13.32-35.38-20.04-53.04zm-382.983-17.93c-29.799 10.37-61.438 8.89-92.559 10.17.063 6.7-31.78.48-37.89 1.4l-2.351-.2c-5.054-.41-11.405-.47-11.46 5.73 1.621 10.86-4.48 22.75-.7 33.42 5.1 14.37 26.92 12.89 38.96 13.17 19.85.45 39.7.93 59.55 1.45 17.83.47 35.721 1.36 53.57 1.49-1.61-12.72-2.049-25.76-3.019-38.47-1.221-9.14.54-19.97-4.101-28.16zm125.3 46.21c.031.16.061.32.101.49.346-.1.741-.15 1.08-.25-.391-.07-.79-.15-1.181-.24z"
        fill="#000"
      />
    </g>
  );
}