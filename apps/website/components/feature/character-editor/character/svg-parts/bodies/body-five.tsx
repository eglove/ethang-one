interface BodyOneProperties {
  clothesColor: string;
  skinColor: string;
}

export function BodyFive({
  clothesColor,
  skinColor,
}: BodyOneProperties): JSX.Element {
  return (
    <g clipRule="evenodd" fillRule="evenodd">
      <path
        d="M1156.53 2891.69c6.04-24.4-2.84-43.87-28.34-58.24-2.2-5.81-51.49-24.63-90.65-52.27-35.19-24.83-60.708-58.91-61.778-60.8 0 0-7.912-18.41-8.814-26.71-4.325-39.85-1.823-65.96-4.494-78.36 17.996-2.36 62.236-1171.14 55.086-1209.88 11.72-2.57 24.14-5.29 35.32-11.9.89-.23-.58-2.82-.54-3.31 28.03-55.02-14.96-242.14-41.91-293.94 21.4-.56 49.58-3.47 62.83-21.34 6.28-2.06 10.23-5.66 13.27-11.44 3.51-5.5 6.76-11.28 9.69-17.2 14.26-29.62 23.05-62.51 18.3-95.147.91-.287 5.57-.317 5.81-1.623.45-8.023-1.02-15.093-3.43-22.671-24.48-85.355-53.96-169.389-92.92-249.746-19.52-43.01-59.913-58.705-101.765-74.851-20.134-7.911-40.277-17.042-61.29-22.224-.265-1.47.99-5.943-1.764-5.579-3.401.71-2.73 6.179-3.991 9.248-48.589-39.779-17.776-60.276-47.074-82.062-30.316-15.737-67.288-16.376-100.713-12.97-12.331.356-22.198 5.915-25.106 18.329-10.6 25.684-35.437 44.588-62.533 50.383-2.239-3.986-8.395-15.417-11.843-11.808-39.133 1.335-98.466 15.702-135.094 26.451-36.77 9.391-73.968 26.537-83.588 66.493-17.455 71.199 10.315 363.807 55.865 420.157l1.481.03c8.075 8.26 19.051 14.32 31.489 18.38-.279 26.35-8.582 52.07-12.714 77.83-9.303 46.73-16.453 93.5-26.816 140.48-.046 5.23-19.763 76.85-.324 62.49 4.012 1.97 8.927 4.12 13.248 5.96-20.652 47.08-30.102 123.02-28.638 181.17.366 34.63-1.066 64.96-8.833 100.42-57.463 300.46-108.127 972.5-109.318 981.49-1.095 8.58 6.176 55.19 0 67.49-5.481 10.91-28.861 4.47-33.334 8.68-11.615 18.92-6.297 30.97-15.824 49.86-4.886 4.37-15.81 13.93-19.394 20.66-7.255 6.98-127.41 85.83-122.54 97.8 0 0-.548 5.74-.732 6.99-10.244 59.61 6.814 59.11 62.004 67.88 80.622 14.22 140.876-13.14 209.012-49.7 22.642-15.27 54.824-44.43 44.349-78.96-.289-2.11-6.502-38.43-8.966-56.87 0 0 6.677-14.77-19.167-12.93 4.25-4.66 13.587-65.1 10.402-73.1-2.023-20.59 1.118-39.29.124-60.48 10.826.8 200.893-900.36 320.111-956.36.737 5.99-.693 17.13 7.251 18.25 36.875 287.7 125.535 932.23 129.606 933.35-6.11 32.86-5.925 109.02-6.039 141.64-.935.87-5.227 4.7-5.918 5.64-.144-.25-2.939 2.55-3.082 2.62l-.378-.87c-12.558 28.32-30.861 57.49-14.684 85.24-12.006-.87-10.079 22.23-10.616 32.87 6.838 20.8 201.236 76.94 244.686 79.61 14.27 2.49 80.74-18.66 93.53-21.69 16.58-3.1.32-33.91-8.51-42.86z"
        fill={skinColor}
      />
      <path
        d="M856.846 2755.58c-3.687 13.79 3.012 20.68 20.096 20.68 25.626 0 41.87-39.38 54.544-43.89l4.927-1.79c7.408-2.72 19.976-7.42 37.702-14.11.521 1.27 1.07 2.57 1.647 3.91 1.07 1.89 26.588 35.97 61.778 60.8 39.16 27.64 88.45 46.46 90.65 52.27 25.5 14.37 34.38 33.84 28.34 58.24 8.83 8.95 25.09 39.76 8.51 42.86-12.79 3.03-79.26 24.18-93.53 21.69-43.45-2.67-237.848-58.81-244.686-79.61l.042-.99c.392-11.01-1.072-32.72 10.574-31.88-15.854-27.2 1.408-55.75 13.924-83.54l.76-1.7.378.87c.143-.07 2.938-2.87 3.082-2.62.176-.24.588-.67 1.118-1.19h.144zm-515.005-25.47l.174.59c2.955 10.2 11.04 45.56 20.578 45.56 6.489 0 14.494-4.02 24.017-12.06l1.1-1.01c8.361-7.67 15.111-12.84 20.249-15.5 11.191.56 14.943 4.91 11.255 13.07l.313 2.3c2.638 18.99 8.376 52.55 8.653 54.57 10.475 34.53-21.707 63.69-44.349 78.96-68.136 36.56-128.39 63.92-209.012 49.7l-4.864-.77c-51.325-8.02-67.077-9.29-57.14-67.11l.069-.53c.224-1.86.663-6.46.663-6.46-4.87-11.96 115.285-90.82 122.54-97.8 3.584-6.73 14.508-16.29 19.394-20.66 9.527-18.89 4.209-30.94 15.824-49.86 3.142-2.96 15.611-.66 24.654-2.81 15.251 2.49 43.169 20.78 45.882 29.82z"
        fill="#fff"
      />
      <path
        d="M618.575 555.343l1.149 2.044c27.588 80.496 72.805 123.817 135.651 129.961 62.845 6.145 95.267-14.012 97.266-60.471l6.985-52.43c2.114.213 1.031 4.216 1.279 5.591 21.013 5.181 41.156 14.312 61.29 22.224l6.265 2.422c39.574 15.362 76.96 31.569 95.5 72.428 38.96 80.357 68.44 164.392 92.92 249.747 2.41 7.578 3.88 14.647 3.43 22.671-.24 1.306-4.9 1.335-5.81 1.623 4.76 32.636-4.04 65.527-18.3 95.147-2.93 5.92-6.18 11.7-9.69 17.2-3.04 5.78-6.99 9.38-13.27 11.44-13.24 17.87-41.43 20.78-62.83 21.34 26.95 51.8 69.94 238.92 41.91 293.94-.04.49.57 14.55-.32 14.78-11.17 6.61-31.28 10.42-43 13l-21 3c.755 5.16 30.49 9.05 30.09 38.77L438 1477c4.142-41.32 3.854-69.04 17-99l-16-6c-3.823-1.65 2.619-12.42-.82-14.11-19.439 14.36.278-57.26.324-62.49 10.363-46.98 17.513-93.75 26.816-140.48 4.132-25.76 12.435-51.49 12.714-77.83-12.179-3.98-22.956-9.87-30.98-17.87l-.509-.51-1.481-.03c-45.55-56.35-73.32-348.958-55.865-420.157 9.62-39.957 46.818-57.102 83.588-66.494l2.225-.649c36.769-10.668 94.519-24.492 132.869-25.802 2.967-3.104 7.938 4.924 10.694 9.765zm49.103 314.848c-29.88 0-61.637 3.527-95.269 10.581l-5.283 7.439 5.283 44.808c20.69-2.162 42.483.737 65.38 8.695l1.091.382c23.296 8.248 39.947 14.579 49.953 18.994l36.271 30.537-11.632 54.533 2.806.13c45.427 2.04 70.959-.24 76.593-6.85 5.75-6.74 8.3-13.56 7.652-20.46l-1.115-2.66c-18.013-43.19-25.884-70.956-23.613-83.301 2.317-12.597 2.317-22.47 0-29.618l-2.525-1.315c-41.111-21.263-76.309-31.895-105.592-31.895z"
        fill={clothesColor}
      />
      <path
        d="M690.347 500.011c6.292-.195 7.493 7.723 3.192 11.006l-.177.13c-3.667 2.601-5.387 4.927-7.377 9.077-9.703 25.681-37.065 40.41-63.826 34.956 9.295 17.34 15.537 34.122 24.842 51.169 42.844 88.261 183.548 116.974 200.376-4.126-25.782-4.982-41.061-62.962-24.518-80.26l.447 2.105c4.768 22.71 8.03 45.96 25.245 63.083a5.32 5.32 0 001.519.2c.656-3.109 1.412-6.184 2.353-9.2 2.291-7.359 13.758-5.975 13.436 1.986 34.333 10.462 67.327 25.281 100.166 39.597 27.302 11.91 49.625 33.214 62.345 60.192 35.65 73.795 62.88 151.693 86.62 230.057 1.59 10.59 19.34 49.948 5.02 53.732 3.51 32.422-5.47 65.215-19.35 94.335-6.44 10.94-10.99 26.1-23.93 30.66-13.43 16.88-37.99 21.26-58.44 22.45 27.5 64.75 64.87 229.68 39.6 294.02 2.24 10.56-26.88 15.57-34.67 17.98 6.28 37.53 4.91 76.19 2.2 113.99-25.36 322.41-30.172 646.6-3.49 969.09 1.57 20.1 3.26 40.2 5.05 60.29l1.08 12.05c1.42 16.04 2.63 32.01 2.26 48.18-.12 5.61-4.77 8.98-9.42 9.27-15.62 9.97-36.593 10.05-54.66 12.45 3.191 17.42 4.979 44.59 10.564 59.25 11.626-3.04 19.119 7.8 7.532 13.92 14.263 7.92 21.604 23.07 33.014 33.7 31.37-12.73 37.21 6.3 11.58 10.64 6.97 5.82 14.36 11.19 22.01 16.29l.54-.07c9.05-1.38 26.09-8.85 30.37 1.05 1.92 7.17-6.93 9.45-13.34 10.32 5.69 3.58 11.4 7.15 17.11 10.71 4.99-2.2 9.95-4.94 15.04-6.7 12.54-2.79 13.62 13.48-2.74 14.39 10.25 7.58 24.39 3.21 30.95 13.9 23.97 9.68 35.3 38.91 29.7 62.27 8.42 7.49 14.33 18.71 15.01 29.98 1.62 12.08-7.99 23.45-21.01 26.63-14.67 4.88-29.55 9.33-44.39 13.52l-1.55.54c-12.23 4.17-25.59 7.9-38.31 7.17-75.425-4.5-176.011-35.48-236.385-74.04-15.058-11.32-17.691-39.31 3.033-48.26-9.55-17.32-4.987-29.9-.939-48.75 2.811-12.3 6.628-24.92 13.537-36.3.613-1.01 2.087-.71 2.169.29.904 12.86-.297 26.03-1.255 38.98l-.105 1.44c-.858 11.95-2.794 16.35.447 27.66 7.759 28.87 82.559 43.28 111.953 55.19a1075.525 1075.525 0 0070.255 19.17l1.74.38c20.06 4.41 40.71 11.09 61.83 7.62 10.95-7.96 27.39-5.72 38.16-14.84 16.23-17.53 3.47-43.23-7.91-59.16-11 3.51-20.4-5.94-28.5-10.93l-.3-.18c-8.27-5.23-16.52-1.57-24.8-6.79l-1.87.36c-30.42 5.8-53.98 12.41-5.46-4.94-7.99-5-16-10.04-23.77-15.34-15.93 1.92-33.39 10.29-48.205 11.05 9.965-9.28 23.565-14.43 36.385-19.54-7.46-5.66-14.56-11.72-20.91-18.39l-6.07 1.51c-37.265 9.26-51.914 11.93-1.744-10.64-9.867-10.95-11.47-27.18-22.318-37.48-17.446 3.65-33.476 11.32-47.685 21.23-5.746 4.12-10.074 9.26-14.625 14.4-21.565 27.75-54.973 32.03-65.179-3.96-.177-.74.98-1.2 1.306-.57l.038.09c4.881 11.05 20.631 20.01 33.787 13.14l.398-.21c12.865-6.71 18.841-20.39 28.975-29.71 13.676-12.34 30.818-20.62 48.505-26.84-4.288-15.66-5.735-44.19-5.248-62.57-29.78 1.41-59.755-.03-89.01-5.69 4.687 34.17 1.606 78.64 3.76 109.12 3.114 10.22-15.83 16.62-17.844 6.43-1.113-32.97 2.112-80.53 7.134-117.33l-2.102-.51c-1.983-.49-4.067-1.09-5.768-2.05-18.774 2.13-13.653-45.58-16.805-59-21.181-295.88-65.798-589.11-103.715-883.04-5.258-2.01-6.191-8.47-7.06-13.86-47.78 32.34-57.302 96.98-78.69 147.08-93.407 259.42-135.141 533.11-199.879 800.25l.356.09c.254.08.256.12-.275.08l-.122-.01v.02c4 .53 7.151 4.73 4.71 8.64-7.288 14.71-27.491 9.5-40.79 8.57 1.291 22.65-3.56 71.53-.486 91.72 16.405.3 17.448 18.36 19.62 29.09l.168 1.1c2.899 18.34 12.642 52.73 5.364 67.55 11.251 13.39 3.158 31.58-8.514 40.72-12.499 9.23-28.057 14.65-42.186 21.76-66.499 26.87-130.834 78.67-212.324 58.74l-3.548-.75c-57.114-12.07-73.523-17.43-62.18-73.96-4.658-11.49-4.689-24.07 1.865-34.23 11.688-15 31.326-23.21 46.952-34.6 26.467-17.79 54.636-33.34 80.487-51.85-.961-.83.373-1.14 1.157-1 18.244-14.28 16.537-39.01 29.265-56.66 3.183-9.09 19.256-11.3 29.841-10.04-3.307-16.95 12.848-94.08 14.9-39.6l-.001.78c.04 8.41 1.417 36.49-1.059 41.99 35.134 10.74 42.71 44.49 50.229 71.75l.484.13c2.4.62 5.614 1.12 6.815 3.47 11.298-7.18 14.455-21.31 25.397-28.92-3.069-2.4-3.231-6.98-1.665-10.53 5.096-18.68 8.151-66.24 15.849-87.11-36.169-5.42-73.016-8.18-108.34-18.01-4.59 4.51-14.01 2.91-13.64-5.23 10.94-177.36 29.756-354.17 53.475-530.26 19.502-164.82 53.81-327.55 77.707-491.51l.202-22.5c.645-67.65 2.452-136.31 27.676-200-2.22-.97-4.42-1.97-6.59-3.02-27.351 11.34-5.802-57.55-4.796-69.97 13.441-71.98 29.274-143.95 39.369-216.39-10.582-3.82-20.353-9.25-28.504-17.14-49.418-40.23-78.066-366.025-60.105-431.532 9.375-41.206 49.104-61.449 86.969-70.763l5.592-1.58c42.29-11.897 85.313-22.677 129.343-25.326 1.568-1.422 6.179-1.013 6.783.173 2.758 1.661 5.376 4.904 7.59 8.33 61.114-7.024 44.584-46.973 69.726-52.661zM836.554 2846.29c-8.556 19.44 2.813 34.22 21.874 42.39 66.007 30.6 139.698 55.2 215.352 59.89 23.08-5.58 45.94-14.81 69.33-20.51l1.01-.19c8.24-1.51 12.1-3.02 11.4-11.58l.3-3.46c.53-6.14.97-12.27.54-18.42-7.19 17.21-28.73 26.67-47.61 30.15-29.94 14.2-63.47-.24-92.89-6.33-47.771-14.53-151.134-37.35-179.306-71.94zm-414.682.41l-.989.3c-8.568 2.65-17.281 5.9-26.884 3.51-42.9 14.54-84.657 31.04-126.1 48.21-44.716 21.41-116.718 46.3-155.468-5.44 5.571 27.14-2.305 36.42 34.692 43.19 58.704 19.14 105.873 9.34 154.585-16.81 35.689-17.36 74.075-31.15 108.62-50.01l.466-.33c6.795-4.85 14.994-13.7 11.078-22.62zm-89.102-116.83c-11.201-20.66-41.343-32.01-63.76-24.39-2.281 19.93 3.628 42.24-9.026 59.54 11.205 1.97 22.374 4.23 33.527 6.57l10.206 2.16c5.008 1.1 11.382 2.98 10.546 8.29-.926 5.87-8.633 4.08-13.762 2.6l-1.987-.58c-14.404-4.24-28.784-8.57-43.005-13.41-7.496 8.25-17.559 14.72-27.318 20.97l4.047.46c14.182 1.59 28.5 3.04 42.512 5.91 6.122 1.81 4.801 10.16-1.463 9.49-16.728-4.36-33.412-9.3-50.427-12.43-8.317 5.5-16.595 11.03-24.932 16.5 16.397 2.37 32.866 2.59 49.255 3.99 10.611.98 10.608 15.48-.001 14.64-19.145-1.75-38.278-7.42-56.506-13.85l-9.607 6.31c-11.213 7.37-22.45 14.72-33.799 21.91-6.829 4.35-15.649 8.49-20.421 14.79-15.07 24.34 22.586 47.6 48.032 47.21 38.647.42 70.835-19.65 104.689-31.66 18.727-4.64 113.938-52.31 122.602-39.76 5.447-2.62 13.023-3.56 16.945-7.87.794-19.93-3.405-40.81-6.929-60.92-.718-3.51-2.434-7.71-2.626-11.32-15.86 5.85-20.376 27.99-41.252 26.11-3.267 5.22-13.329 2.78-17.869-1.36-4.941-4.51-5.561-10.86-6.74-16.52l-.547-2.6c-2.216-10.42-4.874-21.09-10.384-30.78zm469.962-1690.43l-2.552.65c-25.977 6.5-53.152 11.2-79.848 9.45-4.615 17.47-2.209 59-20.98 65.64-6.413 2.41-16.063.45-19.003-6.1-38.827-.69-77.926-4.16-116.755-6.47-29.229-2.3-59.555-2.21-87.692-11.08 3.409 17.17 4.583 34.02 2.675 51.58-6.564 74.88-28.171 147.84-35.413 222.4l-.333 3.55-.21-.12c0 .14-.01.28-.021.42 2.11.61 4.22 1.25 6.32 1.9.75-.38 1.771-.01 2.31.71 154.636 48.1 318.773 68.99 479.94 47.82 28.225-3.52 56.246-8.46 84.07-14.31-.24-2.49 3.55-3.14 4.22-.79 6.17-1.08 12.35-2.26 18.49-3.05-.74-2.09-.87-4.35-.11-6.39 11.98-35.94 6.51-76.92 2.73-114.19-4.82-57.22-16.83-113.36-26.53-169.81-45.924-2.09-91.573-9.58-137.719-8.65-4.861 12.6-21.807 23.19-35.074 15.98-9.368-5.06-12.142-16.09-15.902-25.2-7.433-18.02-15.023-35.98-22.613-53.94zM608.145 545.877c-48.225 14.247-97.633 24.421-145.419 40.233-39.714 9.896-66.825 34.814-68.499 77.31-3.277 91.033 6.703 182.526 21.767 272.236l.786 4.051c8.358 43.235 15.85 87.223 31.634 128.433 23.042 10.72 49.204 13.77 74.413 15.01 36.787 1.87 73.572 3.79 110.327 6.2l28.818 1.87c8.361.54 19.987-.89 26.27 5.61.556.92 1.689.8 2.55 1.37l.169.12c.917.63 1.841 2.14 3.163 1.85 2.149-.67 2.974-4.96 3.479-7l.047-.19c2.799-10.95 4.827-22.14 7.412-33.15 5.892-21.66 8.43-44.56 17.385-65.3-12.819-8.181-24.893-17.534-35.247-28.632l-12.485-4.397c-29.867-10.48-60.071-20.633-91.201-26.915-.746 6.833-10.552 10.74-14.209 3.589-6.062-18.218-7.186-37.998-11.366-56.775-9.489-56.021-20.763-111.838-27.326-168.305 18.094 50.012 27.469 111.396 41.298 165.447.641-.373 1.528-.156 1.555.729 48.963-18.517 103.323-17.763 151.643 1.887 12.104 4.855 24.397 9.214 36.437 14.221 4.112 2.322 12.303 2.18 13.684 7.257 1.479-3.446 3.467-6.673 6.107-8.85.824-1.698 10.183-4.729 11.097-1.369 54.894 7.534 108.268 31.416 164.751 27.384-6.684-24.402-5.893-50.754-6.341-75.955l.136-2.837c1.162-24.827 2.003-55.553 10.419-75.983-5.385 51.432-1.475 102.95 5.097 153.904 39.834-5.14 21.495 17.64-5.04 16.785-53.549 3.858-102.968-19.825-152.25-37.084-26.918-10.761-29.969-1.647-28.769 23.929.025 33.3 15.105 63.692 28.765 93.24l6.136 13.8c10.201 22.96 20.261 45.77 30.171 69.01 43.297-14.36 92.044-6.48 136.898-3.86 34.223 4.29 58.803 2.77 87.753-17.03 10.45-19.95 24.21-38.88 29.59-61.38 6.24-20.633 8.32-42.24 10.14-63.617l-1.64-5.981c-21.11-76.749-44.46-153.122-76.37-226.223l-1.73-4.028c-10.81-25.316-21.8-51.882-43.691-69.615-36.733-27.123-82.163-39.153-120.777-63.287l-.247 1.766c-3.919 27.684-10.687 56.383-28.406 78.657-32.74 40.202-94.556 41.333-136.453 15.223-43.586-24.099-69.735-68.968-82.457-115.869l-.15-.515c-1.191-4.18-4.506-16.836-9.824-16.974zm118.366 451.19c-.027 14.743-2.936 29.273-4.904 43.833 22.659-4.48 45.251-7.6 67.537-13.64-21.709-8.2-42.805-18.08-62.633-30.193zM671.95 878.161c-33.041-6.468-66.869-2.599-99.54 2.611 3.55 16.503 7.605 32.858 10.995 49.383 11.7-.536 122.687 19.119 110.161 34.897 16.383 8.761 31.903 19.06 48.211 28.011 16.402 9.007 33.478 16.737 51.095 23.027l-.93-2.07c-15.161-33.873-29.327-71.99-17.644-109.009-15.709 6.305-37.153-7.239-52.373-12.306-16.156-6.484-32.796-11.599-49.975-14.544zM434.08 747.002c.11-6.18 19.196 11.539 21.687 13.379l1.506 1.363c18.315 16.621 36.408 34.906 46.613 57.713.746 22.415-32.659-31.885-37.29-35.202-10.105-13.006-22.415-24.301-32.516-37.253zm528.148 52.76c-5.164 1.7 8.93-15.814 14.426-14.536 2.187-.319 4.09 2.851 1.662 3.941l-1.206.531c-5.64 2.447-11.406 4.536-14.882 10.064z"
        fill="#000"
      />
    </g>
  );
}