module.exports = {
  darkMode: 'class',
  purge: {
    content:["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    options: {
      whitelist: [
        'bg-opacity-0',
        'bg-opacity-25',
        'bg-opacity-50',
        'bg-opacity-75',
        'bg-opacity-100',
        'mode-dark'
      ]
    }
  },
  theme: {
    extend: {
        spacing: {
            '42': '14rem',
          },
      height: {
        '128': '32rem',
        'half-screen': '50vh'
      },
      backgroundOpacity: {
        '0': '0',
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
        '100': '1'
      }
    },
    zIndex: {
      '-10': '-10',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      '1000': 1000,
      'auto': 'auto',
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
      '2xl-strong': '0 25px 50px -12px rgba(0, 0, 0, .5)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      focus: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      'none': 'none',
    }
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    fontSize: ['responsive', 'hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'odd'],
    textColor: ['responsive', 'hover', 'focus', 'dark',],
    borderColor: ['responsive', 'hover', 'focus', 'dark']
  },
  corePlugins: {
    container: false
  },
}