
export const themes = [
  { name: 'Binom',
    styleName: 'binom-legacy',
    themeVars: {
      
      background: {
        default: {
          disabled: false,
          type: 'carbon',
          colorLight: '#616161',
          colorDark: '#090A0F',
          colorLight2: '#424242',
          colorDark2: '#333',
        },
        onRoute: [
          {
            route: '/home',
            forAllChilds: false,
            values: {
              disabled: false,
              type: 'stars',
              colorLight: '#616161',
              colorDark: '#090A0F',
              colorLight2: '#424242',
              colorDark2: '#424242',
            }
          },
          {
            route: '/ego/alter',
            forAllChilds: false,
            values: {
              disabled: false,
              type: 'stars',
              colorLight: '#616161',
              colorDark: '#090A0F',
              colorLight2: '#424242',
              colorDark2: '#424242',
            }
          },

          

        ]
      },
    }
  },


  { name: 'Nature One',
    styleName: 'nature-one',
    themeVars: {
      background: {
        default: {
          disabled: false,
          type: 'wave',
          colorLight: '#c7db51',
          colorDark: '#c7db51',
          colorLight2: '#222823',
          colorDark2: '#3d3d3d',
        },
        onRoute: [
          {
            route: '/photo',
            forAllChilds: true,
            values: {
              disabled: false,
              type: 'wave',
              colorLight: '#c7db51',
              colorDark: '#c7db51',
              colorLight2: '#222823',
              colorDark2: '#3d3d3d',
            }
          }
        ]
      },
    }
  },

  { name: 'Nature Two',
    styleName: 'nature-two',
    themeVars: {
      background: {
        default: {
          disabled: false,
          type: 'wave',
          colorLight: '#10cfc9',
          colorDark: '#6a0048',
          colorLight2: '#6a0048',
          colorDark2: '#40424f',
        },
        onRoute: [
          {
            route: '/photo',
            forAllChilds: true,
            values: {
              disabled: false,
              type: 'wave',
              colorLight: '#10cfc9',
              colorDark: '#6a0048',
              colorLight2: '#222823',
              colorDark2: '#3d3d3d',
            }
          }
        ]
      },
    }
  },

  { name: 'BlueSky',
    styleName: 'blue-sky',
    themeVars: {
      background: {
        default: {
          disabled: false,
          type: 'gradient',
          colorLight: '#fff',
          colorDark: '#526f89',
          colorLight2: '#526f89',
          colorDark2: '#1a1d2b',
        },
        
      },
    }
  },
  
]

export function getThemes() {
  return themes;
}