import Particles from 'react-tsparticles';

export const ParticlesContainer = (): JSX.Element => {
  const particlesParameters = {
    autoPlay: true,
    background: {
      color: {
        value: '#000228',
      },
      image: '',
      opacity: 1,
      position: '',
      repeat: '',
      size: '',
    },
    backgroundMask: {
      composite: 'destination-out',
      cover: {
        color: {
          value: '#fff',
        },
        opacity: 1,
      },
      enable: false,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 60,
    fullScreen: {
      enable: true,
      zIndex: 0,
    },
    interactivity: {
      detectsOn: '',
      events: {
        onClick: {
          enable: false,
          mode: [],
        },
        onDiv: {
          enable: false,
          mode: [],
          selectors: [],
          type: 'circle',
        },
        onHover: {
          enable: false,
          mode: [],
          parallax: {
            enable: false,
            force: 2,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 1,
          maxSpeed: 50,
          speed: 1,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 200,
          duration: 0.4,
          mix: false,
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 100,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        light: {
          area: {
            gradient: {
              start: {
                value: '#ffffff',
              },
              stop: {
                value: '#000228',
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: '#000228',
            },
            length: 2000,
          },
        },
        push: {
          default: true,
          groups: [],
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 100,
          maxSpeed: 50,
          speed: 1,
        },
        slow: {
          factor: 3,
          radius: 200,
        },
        trail: {
          delay: 1,
          particles: {
            collisions: {
              enable: false,
            },
            color: {
              animation: {
                enable: true,
                speed: 400,
                sync: true,
              },
              value: '#ff0000',
            },
            links: {
              enable: false,
            },
            move: {
              outModes: {
                default: 'destroy',
              },
              speed: 2,
            },
            size: {
              animation: {
                destroy: 'max',
                enable: true,
                minimumValue: 1,
                speed: 5,
                startValue: 'min',
                sync: true,
              },
              value: 5,
            },
          },
          pauseOnStop: false,
          quantity: 1,
        },
      },
    },
    manualParticles: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true,
      },
    },
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      collisions: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1,
            },
            value: 1,
          },
        },
        enable: false,
        mode: 'bounce',
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            sync: true,
          },
        },
        value: '#fff',
      },
      destroy: {
        mode: 'none',
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 3,
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: {
              max: 9,
              min: 4,
            },
          },
          sizeOffset: true,
        },
      },
      gradient: [],
      groups: {},
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          sync: false,
          value: 0,
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001,
          },
          sync: false,
          value: 0,
        },
      },
      links: {
        blink: false,
        color: {
          value: '#fff',
        },
        consent: false,
        distance: 100,
        enable: false,
        frequency: 1,
        opacity: 1,
        shadow: {
          blur: 5,
          color: {
            value: '#00ff00',
          },
          enable: false,
        },
        triangles: {
          enable: false,
          frequency: 1,
        },
        warp: false,
        width: 1,
      },
      move: {
        angle: {
          offset: 0,
          value: 90,
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 3000,
            y: 3000,
          },
        },
        decay: 0,
        direction: 'none',
        distance: {},
        drift: 0,
        enable: false,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50,
        },
        outModes: {
          bottom: 'out',
          default: 'out',
          left: 'out',
          right: 'out',
          top: 'out',
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
          },
          enable: false,
          options: {},
        },
        random: false,
        size: false,
        speed: 2,
        spin: {
          acceleration: 0,
          enable: false,
        },
        straight: false,
        trail: {
          enable: false,
          fillColor: {
            value: '#000000',
          },
          length: 10,
        },
        vibrate: false,
        warp: false,
      },
      number: {
        density: {
          area: 800,
          enable: false,
          factor: 1000,
        },
        limit: 0,
        value: 100,
      },
      opacity: {
        animation: {
          count: 0,
          destroy: 'none',
          enable: true,
          speed: 0.25,
          startValue: 'random',
          sync: false,
        },
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: {
          max: 1,
          min: 0.1,
        },
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          sync: false,
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 45,
        },
        width: 1,
      },
      reduceDuplicates: false,
      repulse: {
        distance: 1,
        duration: 1,
        enabled: false,
        factor: 1,
        random: {
          enable: false,
          minimumValue: 0,
        },
        speed: 1,
        value: 0,
      },
      roll: {
        darken: {
          enable: false,
          value: 0,
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0,
        },
        mode: 'vertical',
        speed: 25,
      },
      rotate: {
        animation: {
          enable: false,
          speed: 0,
          sync: false,
        },
        direction: 'clockwise',
        path: false,
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
      },
      shadow: {
        blur: 0,
        color: {
          value: '#000000',
        },
        enable: false,
        offset: {
          x: 0,
          y: 0,
        },
      },
      shape: {
        options: {},
        type: 'circle',
      },
      size: {
        animation: {
          count: 0,
          destroy: 'none',
          enable: false,
          speed: 5,
          startValue: 'random',
          sync: false,
        },
        random: {
          enable: false,
          minimumValue: 1,
        },
        value: 1,
      },
      stroke: {
        width: 0,
      },
      tilt: {
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
        direction: 'clockwise',
        enable: false,
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1,
        },
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: 50,
      },
      zIndex: {
        opacityRate: 1,
        random: {
          enable: false,
          minimumValue: 0,
        },
        sizeRate: 1,
        value: 0,
        velocityRate: 1,
      },
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    themes: [],
    zLayers: 100,
  };

  // @ts-expect-error Pulled from example
  return <Particles params={particlesParameters}/>;
};
