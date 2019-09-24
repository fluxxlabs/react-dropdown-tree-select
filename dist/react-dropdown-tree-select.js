!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define('ReactDropdownTreeSelect', ['react'], t)
    : 'object' == typeof exports
    ? (exports.ReactDropdownTreeSelect = t(require('react')))
    : (e.ReactDropdownTreeSelect = t(e.React))
})(this, function(e) {
  return (function(e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var o = (t[r] = { i: r, l: !1, exports: {} })
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t]
              }.bind(null, o)
            )
        return r
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 11))
    )
  })([
    function(e, t, n) {
      e.exports = n(9)()
    },
    function(t, n) {
      t.exports = e
    },
    function(e, t, n) {
      var r
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
      !(function() {
        'use strict'
        var n = {}.hasOwnProperty
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var a = typeof r
              if ('string' === a || 'number' === a) e.push((this && this[r]) || r)
              else if (Array.isArray(r)) e.push(o.apply(this, r))
              else if ('object' === a) for (var i in r) n.call(r, i) && r[i] && e.push((this && this[i]) || i)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (r = function() {
                return o
              }.apply(t, [])) || (e.exports = r)
      })()
    },
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      var r
      ;(r = function(e) {
        return (function(e) {
          var t = {}
          function n(r) {
            if (t[r]) return t[r].exports
            var o = (t[r] = { exports: {}, id: r, loaded: !1 })
            return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
          }
          return (n.m = e), (n.c = t), (n.p = ''), n(0)
        })([
          function(e, t, n) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 })
            var r =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t]
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                  }
                  return e
                },
              o = (function() {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n]
                    ;(r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      'value' in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r)
                  }
                }
                return function(t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t
                }
              })(),
              a = function(e, t, n) {
                for (var r = !0; r; ) {
                  var o = e,
                    a = t,
                    i = n
                  ;(r = !1), null === o && (o = Function.prototype)
                  var l = Object.getOwnPropertyDescriptor(o, a)
                  if (void 0 !== l) {
                    if ('value' in l) return l.value
                    var s = l.get
                    if (void 0 === s) return
                    return s.call(i)
                  }
                  var c = Object.getPrototypeOf(o)
                  if (null === c) return
                  ;(e = c), (t = a), (n = i), (r = !0), (l = c = void 0)
                }
              }
            function i(e) {
              return e && e.__esModule ? e : { default: e }
            }
            var l = n(8),
              s = i(l),
              c = i(n(6)),
              u = i(n(2)),
              p = n(1),
              h = (function(e) {
                function t(e) {
                  !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                  })(this, t),
                    a(Object.getPrototypeOf(t.prototype), 'constructor', this).call(this),
                    (this.state = {
                      showLoader: !1,
                      lastScrollTop: 0,
                      actionTriggered: !1,
                      pullToRefreshThresholdBreached: !1,
                    }),
                    (this.startY = 0),
                    (this.currentY = 0),
                    (this.dragging = !1),
                    (this.maxPullDownDistance = 0),
                    (this.onScrollListener = this.onScrollListener.bind(this)),
                    (this.throttledOnScrollListener = (0, u.default)(this.onScrollListener, 150).bind(this)),
                    (this.onStart = this.onStart.bind(this)),
                    (this.onMove = this.onMove.bind(this)),
                    (this.onEnd = this.onEnd.bind(this)),
                    (this.getScrollableTarget = this.getScrollableTarget.bind(this))
                }
                return (
                  (function(e, t) {
                    if ('function' != typeof t && null !== t)
                      throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
                    ;(e.prototype = Object.create(t && t.prototype, {
                      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
                    })),
                      t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
                  })(t, l.Component),
                  o(t, [
                    {
                      key: 'componentDidMount',
                      value: function() {
                        if (
                          ((this._scrollableNode = this.getScrollableTarget()),
                          (this.el = this.props.height ? this._infScroll : this._scrollableNode || window),
                          this.el.addEventListener('scroll', this.throttledOnScrollListener),
                          'number' == typeof this.props.initialScrollY &&
                            this.el.scrollHeight > this.props.initialScrollY &&
                            this.el.scrollTo(0, this.props.initialScrollY),
                          this.props.pullDownToRefresh &&
                            (this.el.addEventListener('touchstart', this.onStart),
                            this.el.addEventListener('touchmove', this.onMove),
                            this.el.addEventListener('touchend', this.onEnd),
                            this.el.addEventListener('mousedown', this.onStart),
                            this.el.addEventListener('mousemove', this.onMove),
                            this.el.addEventListener('mouseup', this.onEnd),
                            (this.maxPullDownDistance = this._pullDown.firstChild.getBoundingClientRect().height),
                            this.forceUpdate(),
                            'function' != typeof this.props.refreshFunction))
                        )
                          throw new Error(
                            'Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\''
                          )
                      },
                    },
                    {
                      key: 'componentWillUnmount',
                      value: function() {
                        this.el.removeEventListener('scroll', this.throttledOnScrollListener),
                          this.props.pullDownToRefresh &&
                            (this.el.removeEventListener('touchstart', this.onStart),
                            this.el.removeEventListener('touchmove', this.onMove),
                            this.el.removeEventListener('touchend', this.onEnd),
                            this.el.removeEventListener('mousedown', this.onStart),
                            this.el.removeEventListener('mousemove', this.onMove),
                            this.el.removeEventListener('mouseup', this.onEnd))
                      },
                    },
                    {
                      key: 'componentWillReceiveProps',
                      value: function(e) {
                        ;(this.props.key === e.key && this.props.dataLength === e.dataLength) ||
                          this.setState({ showLoader: !1, actionTriggered: !1, pullToRefreshThresholdBreached: !1 })
                      },
                    },
                    {
                      key: 'getScrollableTarget',
                      value: function() {
                        return this.props.scrollableTarget instanceof HTMLElement
                          ? this.props.scrollableTarget
                          : 'string' == typeof this.props.scrollableTarget
                          ? document.getElementById(this.props.scrollableTarget)
                          : (null === this.props.scrollableTarget &&
                              console.warn(
                                'You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '
                              ),
                            null)
                      },
                    },
                    {
                      key: 'onStart',
                      value: function(e) {
                        this.state.lastScrollTop ||
                          ((this.dragging = !0),
                          (this.startY = e.pageY || e.touches[0].pageY),
                          (this.currentY = this.startY),
                          (this._infScroll.style.willChange = 'transform'),
                          (this._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)'))
                      },
                    },
                    {
                      key: 'onMove',
                      value: function(e) {
                        this.dragging &&
                          ((this.currentY = e.pageY || e.touches[0].pageY),
                          this.currentY < this.startY ||
                            (this.currentY - this.startY >= this.props.pullDownToRefreshThreshold &&
                              this.setState({ pullToRefreshThresholdBreached: !0 }),
                            this.currentY - this.startY > 1.5 * this.maxPullDownDistance ||
                              ((this._infScroll.style.overflow = 'visible'),
                              (this._infScroll.style.transform =
                                'translate3d(0px, ' + (this.currentY - this.startY) + 'px, 0px)'))))
                      },
                    },
                    {
                      key: 'onEnd',
                      value: function(e) {
                        var t = this
                        ;(this.startY = 0),
                          (this.currentY = 0),
                          (this.dragging = !1),
                          this.state.pullToRefreshThresholdBreached &&
                            this.props.refreshFunction &&
                            this.props.refreshFunction(),
                          requestAnimationFrame(function() {
                            t._infScroll &&
                              ((t._infScroll.style.overflow = 'auto'),
                              (t._infScroll.style.transform = 'none'),
                              (t._infScroll.style.willChange = 'none'))
                          })
                      },
                    },
                    {
                      key: 'isElementAtBottom',
                      value: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? 0.8 : arguments[1],
                          n =
                            e === document.body || e === document.documentElement
                              ? window.screen.availHeight
                              : e.clientHeight,
                          r = (0, p.parseThreshold)(t)
                        return r.unit === p.ThresholdUnits.Pixel
                          ? e.scrollTop + n >= e.scrollHeight - r.value
                          : e.scrollTop + n >= (r.value / 100) * e.scrollHeight
                      },
                    },
                    {
                      key: 'onScrollListener',
                      value: function(e) {
                        var t = this
                        'function' == typeof this.props.onScroll &&
                          setTimeout(function() {
                            return t.props.onScroll(e)
                          }, 0)
                        var n =
                          this.props.height || this._scrollableNode
                            ? e.target
                            : document.documentElement.scrollTop
                            ? document.documentElement
                            : document.body
                        this.state.actionTriggered ||
                          (this.isElementAtBottom(n, this.props.scrollThreshold) &&
                            this.props.hasMore &&
                            (this.setState({ actionTriggered: !0, showLoader: !0 }), this.props.next()),
                          this.setState({ lastScrollTop: n.scrollTop }))
                      },
                    },
                    {
                      key: 'render',
                      value: function() {
                        var e = this,
                          t = r(
                            { height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' },
                            this.props.style
                          ),
                          n = this.props.hasChildren || !(!this.props.children || !this.props.children.length),
                          o = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {}
                        return s.default.createElement(
                          'div',
                          { style: o },
                          s.default.createElement(
                            'div',
                            {
                              className: 'infinite-scroll-component ' + (this.props.className || ''),
                              ref: function(t) {
                                return (e._infScroll = t)
                              },
                              style: t,
                            },
                            this.props.pullDownToRefresh &&
                              s.default.createElement(
                                'div',
                                {
                                  style: { position: 'relative' },
                                  ref: function(t) {
                                    return (e._pullDown = t)
                                  },
                                },
                                s.default.createElement(
                                  'div',
                                  {
                                    style: {
                                      position: 'absolute',
                                      left: 0,
                                      right: 0,
                                      top: -1 * this.maxPullDownDistance,
                                    },
                                  },
                                  !this.state.pullToRefreshThresholdBreached && this.props.pullDownToRefreshContent,
                                  this.state.pullToRefreshThresholdBreached && this.props.releaseToRefreshContent
                                )
                              ),
                            this.props.children,
                            !this.state.showLoader && !n && this.props.hasMore && this.props.loader,
                            this.state.showLoader && this.props.hasMore && this.props.loader,
                            !this.props.hasMore && this.props.endMessage
                          )
                        )
                      },
                    },
                  ]),
                  t
                )
              })()
            ;(t.default = h),
              (h.defaultProps = {
                pullDownToRefreshContent: s.default.createElement('h3', null, 'Pull down to refresh'),
                releaseToRefreshContent: s.default.createElement('h3', null, 'Release to refresh'),
                pullDownToRefreshThreshold: 100,
                disableBrowserPullToRefresh: !0,
              }),
              (h.propTypes = {
                next: c.default.func,
                hasMore: c.default.bool,
                children: c.default.node,
                loader: c.default.node.isRequired,
                scrollThreshold: c.default.oneOfType([c.default.number, c.default.string]),
                endMessage: c.default.node,
                style: c.default.object,
                height: c.default.number,
                scrollableTarget: c.default.node,
                hasChildren: c.default.bool,
                pullDownToRefresh: c.default.bool,
                pullDownToRefreshContent: c.default.node,
                releaseToRefreshContent: c.default.node,
                pullDownToRefreshThreshold: c.default.number,
                refreshFunction: c.default.func,
                onScroll: c.default.func,
                dataLength: c.default.number.isRequired,
                key: c.default.string,
              }),
              (e.exports = t.default)
          },
          function(e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.parseThreshold = function(e) {
                if ('number' == typeof e) return { unit: n.Percent, value: 100 * e }
                if ('string' == typeof e)
                  return e.match(/^(\d*(\.\d+)?)px$/)
                    ? { unit: n.Pixel, value: parseFloat(e) }
                    : e.match(/^(\d*(\.\d+)?)%$/)
                    ? { unit: n.Percent, value: parseFloat(e) }
                    : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), r)
                return console.warn('scrollThreshold should be string or number'), r
              })
            var n = { Pixel: 'Pixel', Percent: 'Percent' }
            t.ThresholdUnits = n
            var r = { unit: n.Percent, value: 0.8 }
          },
          function(e, t) {
            'use strict'
            Object.defineProperty(t, '__esModule', { value: !0 }),
              (t.default = function(e, t, n) {
                var r, o
                return (
                  t || (t = 250),
                  function() {
                    var a = n || this,
                      i = +new Date(),
                      l = arguments
                    r && i < r + t
                      ? (clearTimeout(o),
                        (o = setTimeout(function() {
                          ;(r = i), e.apply(a, l)
                        }, t)))
                      : ((r = i), e.apply(a, l))
                  }
                )
              }),
              (e.exports = t.default)
          },
          function(e, t) {
            'use strict'
            function n(e) {
              return function() {
                return e
              }
            }
            var r = function() {}
            ;(r.thatReturns = n),
              (r.thatReturnsFalse = n(!1)),
              (r.thatReturnsTrue = n(!0)),
              (r.thatReturnsNull = n(null)),
              (r.thatReturnsThis = function() {
                return this
              }),
              (r.thatReturnsArgument = function(e) {
                return e
              }),
              (e.exports = r)
          },
          function(e, t, n) {
            'use strict'
            var r = function(e) {}
            e.exports = function(e, t, n, o, a, i, l, s) {
              if ((r(t), !e)) {
                var c
                if (void 0 === t)
                  c = new Error(
                    'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                  )
                else {
                  var u = [n, o, a, i, l, s],
                    p = 0
                  ;(c = new Error(
                    t.replace(/%s/g, function() {
                      return u[p++]
                    })
                  )).name = 'Invariant Violation'
                }
                throw ((c.framesToPop = 1), c)
              }
            }
          },
          function(e, t, n) {
            'use strict'
            var r = n(3),
              o = n(4),
              a = n(7)
            e.exports = function() {
              function e(e, t, n, r, i, l) {
                l !== a &&
                  o(
                    !1,
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  )
              }
              function t() {
                return e
              }
              e.isRequired = e
              var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
              }
              return (n.checkPropTypes = r), (n.PropTypes = n), n
            }
          },
          function(e, t, n) {
            e.exports = n(5)()
          },
          function(e, t) {
            'use strict'
            e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
          },
          function(t, n) {
            t.exports = e
          },
        ])
      }),
        (e.exports = r(n(1)))
    },
    function(e, t, n) {
      'use strict'
      e.exports = function(e, t) {
        var n = e.filter(t)
        return 0 !== n.length && n.length !== e.length
      }
    },
    function(e, t, n) {
      'use strict'
      var r = n(10)
      function o() {}
      function a() {}
      ;(a.resetWarningCache = o),
        (e.exports = function() {
          function e(e, t, n, o, a, i) {
            if (i !== r) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((l.name = 'Invariant Violation'), l)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          }
          return (n.PropTypes = n), n
        })
    },
    function(e, t, n) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    function(e, t, n) {
      'use strict'
      n.r(t)
      var r,
        o,
        a,
        i = n(2),
        l = n.n(i),
        s = n(0),
        c = n.n(s),
        u = n(1),
        p = n.n(u),
        h = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object.keys(e).reduce(function(t, n) {
            var r
            return (t['data-' + ((r = n), r.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase())] = e[n]), t
          }, {})
        },
        d = ((function() {})(),
        function(e) {
          return !e || (Array.isArray(e) && !e.length)
        }),
        f = function(e, t) {
          return (
            e instanceof Event &&
            !(function(e) {
              if (e.path) return e.path
              for (var t = e.target, n = [t]; t.parentElement; ) (t = t.parentElement), n.unshift(t)
              return n
            })(e).some(function(e) {
              return e === t
            })
          )
        },
        b = function(e, t) {
          var n = void 0
          return function() {
            for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            var i = !n
            clearTimeout(n),
              (n = setTimeout(function() {
                ;(n = null), e.apply(void 0, o)
              }, t)),
              i && e.apply(void 0, o)
          }
        },
        y = ((r = 'rdts'),
        (o = 1),
        (a = new WeakMap()),
        {
          get: function(e) {
            return a.has(e) || a.set(e, o++), '' + r + a.get(e)
          },
          reset: function() {
            ;(a = new WeakMap()), (o = 1)
          },
        }),
        g = n(5),
        v = n.n(g)
      function m(e, t) {
        var n = (function(e) {
          if (!e) return {}
          if ('#' === e[0]) return { 'aria-labelledby': e.substring(1).replace(/ #/g, ' ') }
          return { 'aria-label': e }
        })(e)
        return t && (n['aria-labelledby'] = ((n['aria-labelledby'] || '') + ' ' + t).trim()), n
      }
      var O =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        w = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var k = l.a.bind(v.a),
        _ = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            var n = (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            return (
              (n.handleInputChange = function(e) {
                e.persist(), n.delayedCallback(e)
              }),
              (n.delayedCallback = b(function(e) {
                return n.props.onInputChange(e.target.value)
              }, 300)),
              n
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            w(t, [
              {
                key: '$searchIcon',
                value: function() {
                  var e = this.props,
                    t = e.clearSearch
                  return e.searchModeOn
                    ? p.a.createElement(
                        'button',
                        {
                          id: 'clear-search',
                          onClick: t,
                          className: 'clear-search-btn',
                          type: 'button',
                          'aria-label': 'clear-search-button',
                        },
                        '✕'
                      )
                    : p.a.createElement('span', { className: 'search-icon' }, '⚲')
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.inputRef,
                    n = e.texts,
                    r = void 0 === n ? {} : n,
                    o = e.onFocus,
                    a = e.onBlur,
                    i = e.disabled,
                    l = e.readOnly,
                    s = e.onKeyDown,
                    c = e.activeDescendant
                  return p.a.createElement(
                    'div',
                    { className: 'search-input' },
                    p.a.createElement(
                      'input',
                      O(
                        {
                          type: 'text',
                          disabled: i,
                          ref: t,
                          className: k('search'),
                          placeholder: r.placeholder || 'Choose...',
                          onKeyDown: s,
                          onChange: this.handleInputChange,
                          onFocus: o,
                          onBlur: a,
                          readOnly: l,
                          'aria-activedescendant': c,
                          'aria-autocomplete': s ? 'list' : void 0,
                        },
                        m(r.label)
                      )
                    ),
                    this.$searchIcon()
                  )
                },
              },
            ]),
            t
          )
        })()
      _.propTypes = {
        texts: c.a.object,
        onInputChange: c.a.func,
        onFocus: c.a.func,
        onBlur: c.a.func,
        onKeyDown: c.a.func,
        inputRef: c.a.func,
        disabled: c.a.bool,
        readOnly: c.a.bool,
        activeDescendant: c.a.string,
      }
      var T = _,
        P = n(6),
        C = n.n(P),
        S = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function E(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var x = l.a.bind(C.a),
        j = function(e) {
          return e + '_tag'
        },
        N = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = E(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.handleClick = function(e) {
                var t = r.props,
                  n = t.id,
                  o = t.onDelete
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), o(n, void 0 !== (e.key || e.keyCode))
              }),
              (r.onKeyDown = function(e) {
                'Backspace' === e.key && (r.handleClick(e), e.preventDefault())
              }),
              (r.onKeyUp = function(e) {
                ;(32 === e.keyCode || ['Delete', 'Enter'].indexOf(e.key) > -1) && (r.handleClick(e), e.preventDefault())
              }),
              E(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            S(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.id,
                    n = e.label,
                    r = e.labelRemove,
                    o = void 0 === r ? 'Remove' : r,
                    a = e.readOnly,
                    i = e.disabled,
                    l = e.parentLabel,
                    s = j(t),
                    c = t + '_button',
                    u = x('tag-remove', { readOnly: a }, { disabled: i }),
                    h = a || i,
                    d = l ? n + ' (' + l + ')' : n
                  return p.a.createElement(
                    'span',
                    { className: x('tag'), id: s, 'aria-label': n },
                    d,
                    p.a.createElement(
                      'button',
                      {
                        id: c,
                        onClick: h ? void 0 : this.handleClick,
                        onKeyDown: h ? void 0 : this.onKeyDown,
                        onKeyUp: h ? void 0 : this.onKeyUp,
                        className: u,
                        type: 'button',
                        'aria-label': o,
                        'aria-labelledby': c + ' ' + s,
                        'aria-disabled': h,
                      },
                      '✕'
                    )
                  )
                },
              },
            ]),
            t
          )
        })()
      N.propTypes = {
        id: c.a.string.isRequired,
        label: c.a.string.isRequired,
        parentLabel: c.a.string,
        onDelete: c.a.func,
        readOnly: c.a.bool,
        disabled: c.a.bool,
        labelRemove: c.a.string,
      }
      var D = N,
        R = n(4),
        I = n.n(R),
        M =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        A = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function F(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var L = l.a.bind(I.a),
        B = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = F(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.getAriaAttributes = function() {
                var e = r.props,
                  t = e.mode,
                  n = e.texts,
                  o = void 0 === n ? {} : n,
                  a = e.showDropdown,
                  i = e.clientId,
                  l = e.tags,
                  s = i + '_trigger',
                  c = [],
                  u = m(o.label)
                return (
                  l &&
                    l.length &&
                    (u['aria-label'] && c.push(s),
                    l.forEach(function(e) {
                      c.push(j(e._id))
                    }),
                    (u = m(o.label, c.join(' ')))),
                  M(
                    {
                      id: s,
                      role: 'button',
                      tabIndex: 0,
                      'aria-haspopup': 'simpleSelect' === t ? 'listbox' : 'tree',
                      'aria-expanded': a ? 'true' : 'false',
                    },
                    u
                  )
                )
              }),
              (r.handleTrigger = function(e) {
                ;(e.key && 13 !== e.keyCode && 32 !== e.keyCode && 40 !== e.keyCode) ||
                  (e.key && r.triggerNode && r.triggerNode !== document.activeElement) ||
                  (r.props.showDropdown || 32 !== e.keyCode || e.preventDefault(), r.props.onTrigger(e))
              }),
              F(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            A(t, [
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.disabled,
                    r = t.readOnly,
                    o = t.showDropdown,
                    a = L({ 'dropdown-trigger': !0, arrow: !0, disabled: n, readOnly: r, top: o, bottom: !o })
                  return p.a.createElement(
                    'a',
                    M(
                      {
                        ref: function(t) {
                          e.triggerNode = t
                        },
                        className: a,
                        onClick: n ? void 0 : this.handleTrigger,
                        onKeyDown: n ? void 0 : this.handleTrigger,
                      },
                      this.getAriaAttributes()
                    ),
                    this.props.children
                  )
                },
              },
            ]),
            t
          )
        })()
      B.propTypes = {
        onTrigger: c.a.func,
        disabled: c.a.bool,
        readOnly: c.a.bool,
        showDropdown: c.a.bool,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        texts: c.a.object,
        clientId: c.a.string,
        tags: c.a.array,
      }
      var V = B,
        Y = n(7),
        K = n.n(Y),
        H = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function q(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var U = (function(e) {
        function t() {
          var e, n, r
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = q(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.handleClick = function() {
              var e = r.props,
                t = e.onAction,
                n = e.actionData
              t && t(n.nodeId, n.action)
            }),
            q(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, u['PureComponent']),
          H(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.title,
                  n = e.className,
                  r = e.text,
                  o = e.readOnly
                return p.a.createElement('i', { title: t, className: n, onClick: o ? void 0 : this.handleClick }, r)
              },
            },
          ]),
          t
        )
      })()
      ;(U.propTypes = {
        title: c.a.string,
        text: c.a.string,
        className: c.a.string,
        actionData: c.a.object,
        onAction: c.a.func,
        readOnly: c.a.bool,
      }),
        (U.defaultProps = { onAction: function() {} })
      var W = U,
        $ =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        z = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var J = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, u['PureComponent']),
          z(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.actions,
                  n = e.id,
                  r = (function(e, t) {
                    var n = {}
                    for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                    return n
                  })(e, ['actions', 'id'])
                return d(t)
                  ? null
                  : t.map(function(e, t) {
                      var o = e.id || 'action-' + t
                      return p.a.createElement(
                        W,
                        $({ key: o }, r, e, { actionData: { action: $({}, e, { id: o }), nodeId: n } })
                      )
                    })
              },
            },
          ]),
          t
        )
      })()
      J.propTypes = { id: c.a.string.isRequired, actions: c.a.array }
      var Z = J,
        G =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Q = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var X = function(e) {
          var t = e.checked,
            n = e.indeterminate
          return function(e) {
            e && ((e.checked = t), (e.indeterminate = n))
          }
        },
        ee = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            Q(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.checked,
                    n = e.indeterminate,
                    r = void 0 !== n && n,
                    o = e.onChange,
                    a = e.disabled,
                    i = e.readOnly,
                    l = (function(e, t) {
                      var n = {}
                      for (var r in e)
                        t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                      return n
                    })(e, ['checked', 'indeterminate', 'onChange', 'disabled', 'readOnly']),
                    s = a || i
                  return p.a.createElement(
                    'input',
                    G({ type: 'checkbox', ref: X({ checked: t, indeterminate: r }), onChange: o, disabled: s }, l)
                  )
                },
              },
            ]),
            t
          )
        })()
      ee.propTypes = {
        checked: c.a.bool,
        indeterminate: c.a.bool,
        onChange: c.a.func,
        disabled: c.a.bool,
        readOnly: c.a.bool,
      }
      var te = ee,
        ne =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        re = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var oe = function(e) {
          var t = e.checked
          return function(e) {
            e && (e.checked = t)
          }
        },
        ae = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            re(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.name,
                    n = e.checked,
                    r = e.onChange,
                    o = e.disabled,
                    a = e.readOnly,
                    i = (function(e, t) {
                      var n = {}
                      for (var r in e)
                        t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                      return n
                    })(e, ['name', 'checked', 'onChange', 'disabled', 'readOnly']),
                    l = o || a
                  return p.a.createElement(
                    'input',
                    ne({ type: 'radio', name: t, ref: oe({ checked: n }), onChange: r, disabled: l }, i)
                  )
                },
              },
            ]),
            t
          )
        })()
      ae.propTypes = {
        name: c.a.string.isRequired,
        checked: c.a.bool,
        onChange: c.a.func,
        disabled: c.a.bool,
        readOnly: c.a.bool,
      }
      var ie = ae,
        le = n(3),
        se = n.n(le),
        ce =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        ue = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function pe(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var he = l.a.bind(se.a),
        de = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = pe(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.handleCheckboxChange = function(e) {
                var t = r.props,
                  n = t.mode,
                  o = t.id,
                  a = t.onCheckboxChange
                'simpleSelect' === n || 'radioSelect' === n ? a(o, !0) : a(o, e.target.checked)
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
              }),
              (r.handleNodeToggle = function(e) {
                var t = r.props,
                  n = t.id
                ;(0, t.onNodeToggle)(n), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
              }),
              (r.shouldHideSelect = function() {
                var e = r.props,
                  t = e.disableParentSelect,
                  n = e.isParent
                return t && n
              }),
              pe(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            ue(t, [
              {
                key: '$select',
                value: function() {
                  var e = this.props,
                    t = e.mode,
                    n = e.id,
                    r = e.partial,
                    o = e.checked,
                    a = e.value,
                    i = e.disabled,
                    l = e.showPartiallySelected,
                    s = e.readOnly,
                    c = e.clientId,
                    u = { id: n, value: a, checked: o, disabled: i, readOnly: s, tabIndex: -1 }
                  return this.shouldHideSelect()
                    ? null
                    : 'radioSelect' === t
                    ? p.a.createElement(
                        ie,
                        ce({ name: c, className: 'radio-item', onChange: this.handleCheckboxChange }, u)
                      )
                    : p.a.createElement(
                        te,
                        ce(
                          {
                            name: n,
                            className: he('checkbox-item', { 'simple-select': 'simpleSelect' === t }),
                            indeterminate: l && r,
                            onChange: this.handleCheckboxChange,
                          },
                          u
                        )
                      )
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.mode,
                    n = e.title,
                    r = e.label,
                    o = e.id,
                    a = e.disabled,
                    i = e.readOnly,
                    l = { className: 'node-label' },
                    s = this.shouldHideSelect()
                  return (
                    'simpleSelect' === t && !i && !a
                      ? (l.onClick = this.handleCheckboxChange)
                      : s && (l.onClick = this.handleNodeToggle),
                    p.a.createElement(
                      'label',
                      { title: n || r, htmlFor: o },
                      this.$select(),
                      p.a.createElement('span', l, r)
                    )
                  )
                },
              },
            ]),
            t
          )
        })()
      de.propTypes = {
        id: c.a.string.isRequired,
        actions: c.a.array,
        title: c.a.string,
        label: c.a.string.isRequired,
        value: c.a.string.isRequired,
        checked: c.a.bool,
        partial: c.a.bool,
        disabled: c.a.bool,
        dataset: c.a.object,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: c.a.bool,
        onCheckboxChange: c.a.func,
        readOnly: c.a.bool,
        clientId: c.a.string,
      }
      var fe = de,
        be = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function ye(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var ge = l.a.bind(se.a),
        ve = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = ye(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.onToggle = function(e) {
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), r.props.onNodeToggle(r.props.id)
              }),
              (r.onKeyDown = function(e) {
                ;('Enter' !== e.key && 32 !== e.keyCode) || (r.props.onNodeToggle(r.props.id), e.preventDefault())
              }),
              ye(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            be(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.expanded
                  if (e.isLeaf) return null
                  var n = ge('toggle', { expanded: t, collapsed: !t })
                  return p.a.createElement('i', {
                    role: 'button',
                    tabIndex: -1,
                    className: n,
                    onClick: this.onToggle,
                    onKeyDown: this.onKeyDown,
                    'aria-hidden': !0,
                  })
                },
              },
            ]),
            t
          )
        })()
      ve.propTypes = { expanded: c.a.bool, isLeaf: c.a.bool, onNodeToggle: c.a.func, id: c.a.string }
      var me = ve,
        Oe =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        we = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function ke(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var _e = l.a.bind(se.a),
        Te = function(e) {
          return d(e)
        },
        Pe = (function(e) {
          function t() {
            var e, n, r
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = ke(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.getAriaAttributes = function() {
                var e = r.props,
                  t = e._children,
                  n = e._depth,
                  o = e.checked,
                  a = e.disabled,
                  i = e.expanded,
                  l = e.readOnly,
                  s = e.mode,
                  c = e.partial,
                  u = {}
                return (
                  (u.role = 'simpleSelect' === s ? 'option' : 'treeitem'),
                  (u['aria-disabled'] = a || l),
                  (u['aria-selected'] = o),
                  'simpleSelect' !== s &&
                    ((u['aria-checked'] = c ? 'mixed' : o),
                    (u['aria-level'] = (n || 0) + 1),
                    (u['aria-expanded'] = t && (i ? 'true' : 'false'))),
                  u
                )
              }),
              ke(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            we(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.mode,
                    n = e.keepTreeOnSearch,
                    r = e._id,
                    o = e._children,
                    a = e.dataset,
                    i = e._depth,
                    l = e.expanded,
                    s = e.title,
                    c = e.label,
                    u = e.partial,
                    d = e.checked,
                    f = e.value,
                    b = e.disabled,
                    y = e.actions,
                    g = e.onAction,
                    v = e.searchModeOn,
                    m = e.onNodeToggle,
                    O = e.onCheckboxChange,
                    w = e.showPartiallySelected,
                    k = e.readOnly,
                    _ = e.clientId,
                    T = e.disableParentSelect,
                    P = (function(e) {
                      var t = e.keepTreeOnSearch,
                        n = e.keepChildrenOnSearch,
                        r = e._children,
                        o = e.matchInChildren,
                        a = e.matchInParent,
                        i = e.disabled,
                        l = e.partial,
                        s = e.hide,
                        c = e.className,
                        u = e.showPartiallySelected,
                        p = e.readOnly,
                        h = e.checked,
                        d = e._focused
                      return _e(
                        'node',
                        {
                          leaf: Te(r),
                          tree: !Te(r),
                          disabled: i,
                          hide: s,
                          'match-in-children': t && o,
                          'match-in-parent': t && n && a,
                          partial: u && l,
                          readOnly: p,
                          checked: h,
                          focused: d,
                        },
                        c
                      )
                    })(this.props),
                    C = n || !v ? { paddingLeft: 20 * (i || 0) + 'px' } : {},
                    S = r + '_li'
                  return p.a.createElement(
                    'li',
                    Oe({ className: P, style: C, id: S }, h(a), this.getAriaAttributes()),
                    p.a.createElement(me, { isLeaf: Te(o), expanded: l, id: r, onNodeToggle: m }),
                    p.a.createElement(fe, {
                      title: s,
                      label: c,
                      id: r,
                      partial: u,
                      checked: d,
                      value: f,
                      disabled: b,
                      mode: t,
                      onCheckboxChange: O,
                      showPartiallySelected: w,
                      readOnly: k,
                      clientId: _,
                      disableParentSelect: T,
                      isParent: !Te(o),
                      onNodeToggle: m,
                    }),
                    p.a.createElement(Z, { actions: y, onAction: g, id: r, readOnly: k })
                  )
                },
              },
            ]),
            t
          )
        })()
      Pe.propTypes = {
        _id: c.a.string.isRequired,
        _depth: c.a.number,
        _children: c.a.array,
        actions: c.a.array,
        className: c.a.string,
        title: c.a.string,
        label: c.a.string.isRequired,
        value: c.a.string.isRequired,
        checked: c.a.bool,
        expanded: c.a.bool,
        disabled: c.a.bool,
        partial: c.a.bool,
        dataset: c.a.object,
        keepTreeOnSearch: c.a.bool,
        keepChildrenOnSearch: c.a.bool,
        searchModeOn: c.a.bool,
        onNodeToggle: c.a.func,
        onAction: c.a.func,
        onCheckboxChange: c.a.func,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: c.a.bool,
        readOnly: c.a.bool,
        clientId: c.a.string,
      }
      var Ce = Pe,
        Se =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Ee = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var xe = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            je.call(n),
            (n.currentPage = 1),
            n.computeInstanceProps(e, !0),
            (n.state = { items: n.allVisibleNodes.slice(0, n.props.pageSize) }),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, u['Component']),
          Ee(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.searchModeOn,
                  n = e.texts,
                  r = (void 0 === n ? {} : n).treeSubheader || null
                return p.a.createElement(
                  'ul',
                  Se(
                    { className: 'root ' + (t ? 'searchModeOn' : ''), ref: this.setNodeRef },
                    this.getAriaAttributes()
                  ),
                  r && p.a.createElement('h2', { className: 'tree-subheader' }, r),
                  this.state.scrollableTarget &&
                    p.a.createElement(
                      K.a,
                      {
                        dataLength: this.state.items.length,
                        next: this.loadMore,
                        hasMore: this.hasMore(),
                        loader: p.a.createElement('span', { className: 'searchLoader' }, 'Loading...'),
                        scrollableTarget: this.state.scrollableTarget,
                      },
                      this.state.items
                    )
                )
              },
            },
          ]),
          t
        )
      })()
      ;(xe.propTypes = {
        data: c.a.object,
        keepTreeOnSearch: c.a.bool,
        keepChildrenOnSearch: c.a.bool,
        searchModeOn: c.a.bool,
        onChange: c.a.func,
        onNodeToggle: c.a.func,
        onAction: c.a.func,
        onCheckboxChange: c.a.func,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: c.a.bool,
        pageSize: c.a.number,
        readOnly: c.a.bool,
        clientId: c.a.string,
        activeDescendant: c.a.string,
      }),
        (xe.defaultProps = { pageSize: 100 })
      var je = function() {
          var e = this
          ;(this.componentWillReceiveProps = function(t) {
            var n = t.activeDescendant,
              r = n === e.props.activeDescendant
            if (
              (e.computeInstanceProps(t, !r),
              e.setState({ items: e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize) }),
              !r)
            ) {
              var o = e.state.scrollableTarget,
                a = n && document && document.getElementById(n)
              a && o && (o.scrollTop = a.offsetTop - (o.clientHeight - a.clientHeight) / 2)
            }
          }),
            (this.componentDidMount = function() {
              e.setState({ scrollableTarget: e.node.parentNode })
            }),
            (this.computeInstanceProps = function(t, n) {
              if (
                ((e.allVisibleNodes = e.getNodes(t)),
                (e.totalPages = Math.ceil(e.allVisibleNodes.length / e.props.pageSize)),
                n && t.activeDescendant)
              ) {
                var r = t.activeDescendant.replace(/_li$/, ''),
                  o =
                    e.allVisibleNodes.findIndex(function(e) {
                      return e.key === r
                    }) + 1
                e.currentPage = o > 0 ? Math.ceil(o / e.props.pageSize) : 1
              }
            }),
            (this.getNodes = function(e) {
              var t = e.data,
                n = e.keepTreeOnSearch,
                r = e.keepChildrenOnSearch,
                o = e.searchModeOn,
                a = e.mode,
                i = e.showPartiallySelected,
                l = e.readOnly,
                s = e.onAction,
                c = e.onChange,
                u = e.onCheckboxChange,
                h = e.onNodeToggle,
                d = e.activeDescendant,
                f = e.clientId,
                b = e.disableParentSelect,
                y = []
              return (
                t.forEach(function(e) {
                  ;(function(e, t, n) {
                    if (t || e.expanded) return !0
                    var r = e._parent && n.get(e._parent)
                    return !r || r.expanded
                  })(e, o, t) &&
                    y.push(
                      p.a.createElement(
                        Ce,
                        Se({ keepTreeOnSearch: n, keepChildrenOnSearch: r, key: e._id }, e, {
                          searchModeOn: o,
                          onChange: c,
                          onCheckboxChange: u,
                          onNodeToggle: h,
                          onAction: s,
                          mode: a,
                          showPartiallySelected: i,
                          readOnly: l,
                          clientId: f,
                          activeDescendant: d,
                          disableParentSelect: b,
                        })
                      )
                    )
                }),
                y
              )
            }),
            (this.hasMore = function() {
              return e.currentPage < e.totalPages
            }),
            (this.loadMore = function() {
              e.currentPage = e.currentPage + 1
              var t = e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize)
              e.setState({ items: t })
            }),
            (this.setNodeRef = function(t) {
              e.node = t
            }),
            (this.getAriaAttributes = function() {
              var t = e.props.mode
              return {
                role: 'simpleSelect' === t ? 'listbox' : 'tree',
                'aria-multiselectable': /multiSelect|hierarchical/.test(t),
              }
            })
        },
        Ne = xe,
        De = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })(),
        Re =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }
      var Ie = (function(e) {
        function t() {
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, u['PureComponent']),
          De(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.tags,
                  n = e.onTagRemove,
                  r = e.texts,
                  o = void 0 === r ? {} : r,
                  a = e.disabled,
                  i = e.readOnly,
                  l = e.treeManager
                return p.a.createElement(
                  'div',
                  { className: 'tag-list' },
                  (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                      t = arguments[1],
                      n = arguments[2],
                      r = arguments[3],
                      o = arguments[4]
                    return (function(e, t) {
                      return e.map(function(e) {
                        var n = e._parent,
                          r = n ? t.getNodeById(n) : null
                        return (e.parentLabel = r ? r.label : null), e
                      })
                    })(e, arguments[5]).map(function(e) {
                      var a = e._id,
                        i = e.label,
                        l = e.dataset,
                        s = e.parentLabel
                      return p.a.createElement(
                        'li',
                        Re({ className: 'tag-item', key: 'tag-item-' + a }, h(l)),
                        p.a.createElement(D, {
                          label: i,
                          parentLabel: s,
                          id: a,
                          onDelete: t,
                          readOnly: n,
                          disabled: r,
                          labelRemove: o,
                        })
                      )
                    })
                  })(t, n, i, a, o.labelRemove, l)
                )
              },
            },
          ]),
          t
        )
      })()
      Ie.propTypes = {
        tags: c.a.array,
        texts: c.a.object,
        onTagRemove: c.a.func,
        disabled: c.a.bool,
        readOnly: c.a.bool,
      }
      var Me = Ie,
        Ae = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var Fe = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            var n = (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            return (
              (n.handleClick = function(e) {
                var t = n.props,
                  r = t.option,
                  o = t.onCustomOptionRemove
                e.stopPropagation(), o(r)
              }),
              (n.handleClick = n.handleClick.bind(n)),
              n
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            Ae(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.option
                  return p.a.createElement(
                    'li',
                    { className: 'custom-option tag-item' },
                    '"',
                    e,
                    '"',
                    p.a.createElement(
                      'button',
                      {
                        className: 'clear-custom-option-btn',
                        type: 'button',
                        'aria-label': 'clear option',
                        onClick: this.handleClick,
                      },
                      '✕'
                    )
                  )
                },
              },
            ]),
            t
          )
        })(),
        Le = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var Be = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, t),
              (function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
              })(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            Le(t, [
              {
                key: '$emptyState',
                value: function() {
                  var e = this.props,
                    t = e.tags,
                    n = e.customOptionsPlaceholder
                  return t.length && n ? n : null
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.customOptions,
                    n = e.onCustomOptionRemove
                  return !!t && t.length
                    ? p.a.createElement(
                        'div',
                        { className: 'custom-options' },
                        p.a.createElement(
                          'ul',
                          null,
                          t.map(function(e, t) {
                            return p.a.createElement(Fe, {
                              option: e,
                              onCustomOptionRemove: n,
                              key: 'custom-option-' + t,
                            })
                          })
                        )
                      )
                    : this.$emptyState()
                },
              },
            ]),
            t
          )
        })(),
        Ve = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var Ye = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            var n = (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            return (
              (n.handleClick = function(e) {
                var t = n.props,
                  r = t.searchTerm,
                  o = t.onCustomOptionCreate
                e.stopPropagation(), o(r)
              }),
              (n.handleClick = n.handleClick.bind(n)),
              n
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['PureComponent']),
            Ve(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.searchTerm
                  return p.a.createElement(
                    'div',
                    { className: 'create-custom-option', tabIndex: '-1' },
                    p.a.createElement(
                      'button',
                      {
                        id: 'add-custom-option',
                        className: 'add-custom-option-btn',
                        type: 'button',
                        'aria-label': 'add option',
                        onClick: this.handleClick,
                      },
                      'Add "',
                      e,
                      '"'
                    )
                  )
                },
              },
            ]),
            t
          )
        })(),
        Ke = n(8),
        He = n.n(Ke),
        qe = function(e) {
          return e
        },
        Ue = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'children',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qe
          return (
            He()(e[t], function(e) {
              return n(e).checked
            }) ||
            e[t].some(function(e) {
              return n(e).partial
            })
          )
        }
      var We = function(e) {
          var t = e.tree,
            n = e.simple,
            r = e.radio,
            o = e.showPartialState,
            a = e.hierarchical,
            i = e.rootPrefixId
          return (function e(t) {
            var n = t.nodes,
              r = t.parent,
              o = t.depth,
              a = void 0 === o ? 0 : o,
              i = t.simple,
              l = t.radio,
              s = t.showPartialState,
              c = t.hierarchical,
              u = t.rootPrefixId,
              p = t._rv,
              h = void 0 === p ? { list: new Map(), defaultValues: [], singleSelectedNode: null } : p,
              f = i || l
            return (
              n.forEach(function(t, n) {
                ;(t._depth = a),
                  r
                    ? ((t._id = t.id || r._id + '-' + n), (t._parent = r._id), r._children.push(t._id))
                    : (t._id = t.id || '' + (u ? u + '-' + n : n)),
                  f && t.checked && (h.singleSelectedNode ? (t.checked = !1) : (h.singleSelectedNode = t)),
                  f &&
                    t.isDefaultValue &&
                    h.singleSelectedNode &&
                    !h.singleSelectedNode.isDefaultValue &&
                    ((h.singleSelectedNode.checked = !1), (h.singleSelectedNode = null)),
                  !t.isDefaultValue ||
                    (f && 0 !== h.defaultValues.length) ||
                    (h.defaultValues.push(t._id), (t.checked = !0), f && (h.singleSelectedNode = t)),
                  (c && !l) ||
                    (function(e) {
                      for (
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          n =
                            arguments.length > 2 && void 0 !== arguments[2] && !arguments[2]
                              ? ['disabled']
                              : ['checked', 'disabled'],
                          r = 0;
                        r < n.length;
                        r++
                      ) {
                        var o = n[r]
                        void 0 === e[o] && void 0 !== t[o] && (e[o] = t[o])
                      }
                    })(t, r, !l),
                  h.list.set(t._id, t),
                  !i &&
                    t.children &&
                    ((t._children = []),
                    e({
                      nodes: t.children,
                      parent: t,
                      depth: a + 1,
                      radio: l,
                      showPartialState: s,
                      hierarchical: c,
                      _rv: h,
                    }),
                    s &&
                      !t.checked &&
                      ((t.partial = Ue(t)),
                      f ||
                        d(t.children) ||
                        !t.children.every(function(e) {
                          return e.checked
                        }) ||
                        (t.checked = !0)),
                    (t.children = void 0))
              }),
              h
            )
          })({
            nodes: Array.isArray(t) ? t : [t],
            simple: n,
            radio: r,
            showPartialState: o,
            hierarchical: a,
            rootPrefixId: i,
          })
        },
        $e = function e(t, n, r) {
          ;(n[t._id] = !0),
            d(t._children) ||
              t._children.forEach(function(t) {
                return e(r(t), n, r)
              })
        },
        ze = function(e, t) {
          var n = [],
            r = {}
          return (
            e.forEach(function(e, o) {
              r[o] || (t(e, o, r) && n.push(e), (r[o] = !0))
            }),
            n
          )
        },
        Je = {
          getNodesMatching: ze,
          getVisibleNodes: function(e, t, n) {
            return ze(e, function(e, r, o) {
              return n && e._children && e._children.length && !0 !== e.expanded && $e(e, o, t), !e.hide
            })
          },
          markSubTreeVisited: $e,
        },
        Ze = (function() {
          return function(e, t) {
            if (Array.isArray(e)) return e
            if (Symbol.iterator in Object(e))
              return (function(e, t) {
                var n = [],
                  r = !0,
                  o = !1,
                  a = void 0
                try {
                  for (
                    var i, l = e[Symbol.iterator]();
                    !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  ;(o = !0), (a = e)
                } finally {
                  try {
                    !r && l.return && l.return()
                  } finally {
                    if (o) throw a
                  }
                }
                return n
              })(e, t)
            throw new TypeError('Invalid attempt to destructure non-iterable instance')
          }
        })(),
        Ge = 'ArrowUp',
        Qe = 'ArrowDown',
        Xe = 'ArrowLeft',
        et = 'ArrowRight',
        tt = 'Enter',
        nt = 'Home',
        rt = 'PageUp',
        ot = 'End',
        at = 'PageDown',
        it = {
          None: 'None',
          FocusPrevious: 'FocusPrevious',
          FocusNext: 'FocusNext',
          FocusParent: 'FocusParent',
          FocusFirst: 'FocusFirst',
          FocusLast: 'FocusLast',
          ToggleExpanded: 'ToggleExpanded',
          ToggleChecked: 'ToggleChecked',
        },
        lt = new Set([it.FocusPrevious, it.FocusNext, it.FocusParent, it.FocusFirst, it.FocusLast]),
        st = [Ge, Qe, nt, rt, ot, at],
        ct = st.concat([Xe, et, tt]),
        ut = function(e, t, n, r) {
          return t.indexOf(e) > -1 || (!n && e === r)
        },
        pt = function(e, t, n) {
          if (!e || 0 === e.length) return t
          var r = t
          ;(function(e) {
            return ut(e, [it.FocusFirst, it.FocusLast], !0)
          })(n)
            ? (r = Ze(e, 1)[0])
            : [it.FocusPrevious, it.FocusNext].indexOf(n) > -1 &&
              (r = (function(e, t) {
                var n = e.indexOf(t) + 1
                return n % e.length == 0 ? e[0] : e[n]
              })(e, t))
          return r
        },
        ht = {
          isValidKey: function(e, t) {
            return (t ? ct : st).indexOf(e) > -1
          },
          getAction: function(e, t) {
            return t === Xe
              ? (function(e, t) {
                  return e && t === Xe
                    ? !0 === e.expanded
                      ? it.ToggleExpanded
                      : e._parent
                      ? it.FocusParent
                      : it.None
                    : it.None
                })(e, t)
              : t === et
              ? (function(e, t) {
                  return e && e._children && t === et ? (!0 !== e.expanded ? it.ToggleExpanded : it.FocusNext) : it.None
                })(e, t)
              : (function(e, t) {
                  return ut(e, [nt, rt], t, Qe)
                })(t, e)
              ? it.FocusFirst
              : (function(e, t) {
                  return ut(e, [ot, at], t, Ge)
                })(t, e)
              ? it.FocusLast
              : (function(e, t) {
                  if (!e) return it.None
                  switch (t) {
                    case Ge:
                      return it.FocusPrevious
                    case Qe:
                      return it.FocusNext
                    case tt:
                      return it.ToggleChecked
                    default:
                      return it.None
                  }
                })(e, t)
          },
          getNextFocus: function(e, t, n, r, o) {
            if (n === it.FocusParent)
              return (function(e, t) {
                return e && e._parent ? t(e._parent) : e
              })(t, r)
            if (!lt.has(n)) return t
            var a = Je.getVisibleNodes(e, r, o)
            return (
              (function(e) {
                return ut(e, [it.FocusPrevious, it.FocusLast], !0)
              })(n) && (a = a.reverse()),
              pt(a, t, n)
            )
          },
          getNextFocusAfterTagDelete: function(e, t, n, r) {
            var o =
              t &&
              t.findIndex(function(t) {
                return t._id === e
              })
            if (o < 0 || !n.length) return r
            var a = n[(o = n.length > o ? o : n.length - 1)]._id,
              i = document.getElementById(j(a))
            return (i && i.firstElementChild) || r
          },
          handleFocusNavigationkey: function(e, t, n, r, o) {
            var a = ht.getNextFocus(e, n, t, r, o)
            return n && a && n._id !== a._id && (n._focused = !1), a ? ((a._focused = !0), a._id) : n && n._id
          },
          handleToggleNavigationkey: function(e, t, n, r, o) {
            return (
              e !== it.ToggleChecked || n || t.readOnly || t.disabled
                ? e === it.ToggleExpanded && o(t._id)
                : r(t._id, !0 !== t.checked),
              t && t._id
            )
          },
        },
        dt = ht,
        ft = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var bt = (function() {
          function e(t) {
            var n = t.data,
              r = t.mode,
              o = t.showPartiallySelected,
              a = t.rootPrefixId,
              i = t.searchPredicate
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this._src = n),
              (this.simpleSelect = 'simpleSelect' === r),
              (this.radioSelect = 'radioSelect' === r),
              (this.hierarchical = 'hierarchical' === r),
              (this.searchPredicate = i)
            var l = We({
                tree: JSON.parse(JSON.stringify(n)),
                simple: this.simpleSelect,
                radio: this.radioSelect,
                showPartialState: o,
                hierarchical: this.hierarchical,
                rootPrefixId: a,
              }),
              s = l.list,
              c = l.defaultValues,
              u = l.singleSelectedNode
            ;(this.tree = s),
              (this.defaultValues = c),
              (this.showPartialState = !this.hierarchical && o),
              (this.searchMaps = new Map()),
              (this.simpleSelect || this.radioSelect) && u && (this.currentChecked = u._id)
          }
          return (
            ft(e, [
              {
                key: 'getNodeById',
                value: function(e) {
                  return this.tree.get(e)
                },
              },
              {
                key: 'getMatches',
                value: function(e) {
                  var t = this
                  if (this.searchMaps.has(e)) return this.searchMaps.get(e)
                  var n = -1,
                    r = e
                  this.searchMaps.forEach(function(t, o) {
                    e.startsWith(o) && o.length > n && ((n = o.length), (r = o))
                  })
                  var o = [],
                    a = this._getAddOnMatch(o, e)
                  r !== e
                    ? this.searchMaps.get(r).forEach(function(e) {
                        return a(t.getNodeById(e))
                      })
                    : this.tree.forEach(a)
                  return this.searchMaps.set(e, o), o
                },
              },
              {
                key: 'addParentsToTree',
                value: function(e, t) {
                  if (void 0 !== e) {
                    var n = this.getNodeById(e)
                    this.addParentsToTree(n._parent, t), (n.hide = !0), (n.matchInChildren = !0), t.set(e, n)
                  }
                },
              },
              {
                key: 'addChildrenToTree',
                value: function(e, t, n) {
                  var r = this
                  void 0 !== e &&
                    e.forEach(function(e) {
                      if (!n || !n.includes(e)) {
                        var o = r.getNodeById(e)
                        ;(o.matchInParent = !0), t.set(e, o), r.addChildrenToTree(o._children, t)
                      }
                    })
                },
              },
              {
                key: 'filterTree',
                value: function(e, t, n) {
                  var r = this,
                    o = this.getMatches(e.toLowerCase()),
                    a = new Map()
                  o.forEach(function(e) {
                    var i = r.getNodeById(e)
                    ;(i.hide = !1),
                      t && r.addParentsToTree(i._parent, a),
                      a.set(e, i),
                      t && n && r.addChildrenToTree(i._children, a, o)
                  })
                  var i = 0 === o.length
                  return (this.matchTree = a), { allNodesHidden: i, tree: a }
                },
              },
              {
                key: 'restoreNodes',
                value: function() {
                  return (
                    this.tree.forEach(function(e) {
                      e.hide = !1
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'restoreDefaultValues',
                value: function() {
                  var e = this
                  return (
                    this.defaultValues.forEach(function(t) {
                      e.setNodeCheckedState(t, !0)
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'togglePreviousChecked',
                value: function(e, t) {
                  var n = this.currentChecked
                  n && n !== e && (this.getNodeById(n).checked = !1), (this.currentChecked = t ? e : null)
                },
              },
              {
                key: 'setNodeCheckedState',
                value: function(e, t) {
                  var n = this.getNodeById(e)
                  ;(n.checked = t),
                    this.showPartialState && (n.partial = !1),
                    this.simpleSelect
                      ? this.togglePreviousChecked(e, t)
                      : this.radioSelect
                      ? (this.togglePreviousChecked(e, t),
                        this.showPartialState && this.partialCheckParents(n),
                        t || this.unCheckParents(n))
                      : (this.hierarchical || this.toggleChildren(e, t),
                        this.showPartialState && this.partialCheckParents(n),
                        this.hierarchical || t || this.unCheckParents(n))
                },
              },
              {
                key: 'unCheckParents',
                value: function(e) {
                  for (var t = e._parent; t; ) {
                    var n = this.getNodeById(t)
                    ;(n.checked = !1), (n.partial = Ue(n, '_children', this.getNodeById.bind(this))), (t = n._parent)
                  }
                },
              },
              {
                key: 'partialCheckParents',
                value: function(e) {
                  for (var t = this, n = e._parent; n; ) {
                    var r = this.getNodeById(n)
                    ;(r.checked = r._children.every(function(e) {
                      return t.getNodeById(e).checked
                    })),
                      (r.partial = Ue(r, '_children', this.getNodeById.bind(this))),
                      (n = r._parent)
                  }
                },
              },
              {
                key: 'toggleChildren',
                value: function(e, t) {
                  var n = this,
                    r = this.getNodeById(e)
                  ;(r.checked = t),
                    this.showPartialState && (r.partial = !1),
                    d(r._children) ||
                      r._children.forEach(function(e) {
                        return n.toggleChildren(e, t)
                      })
                },
              },
              {
                key: 'toggleNodeExpandState',
                value: function(e) {
                  var t = this.getNodeById(e)
                  return (t.expanded = !t.expanded), t.expanded || this.collapseChildren(t), this.tree
                },
              },
              {
                key: 'collapseChildren',
                value: function(e) {
                  var t = this
                  ;(e.expanded = !1),
                    d(e._children) ||
                      e._children.forEach(function(e) {
                        return t.collapseChildren(t.getNodeById(e))
                      })
                },
              },
              {
                key: 'getTreeAndTags',
                value: function() {
                  return { tree: this.tree, tags: this.tags }
                },
              },
              {
                key: 'handleNavigationKey',
                value: function(e, t, n, r, o, a, i) {
                  var l = this,
                    s = e && this.getNodeById(e),
                    c = dt.getAction(s, n)
                  return lt.has(c)
                    ? dt.handleFocusNavigationkey(
                        t,
                        c,
                        s,
                        function(e) {
                          return l.getNodeById(e)
                        },
                        o
                      )
                    : s && t.has(s._id)
                    ? dt.handleToggleNavigationkey(c, s, r, a, i)
                    : e
                },
              },
              {
                key: '_getAddOnMatch',
                value: function(e, t) {
                  var n = function(e, t) {
                    return e.label.toLowerCase().indexOf(t) >= 0
                  }
                  return (
                    'function' == typeof this.searchPredicate && (n = this.searchPredicate),
                    function(r) {
                      n(r, t) && e.push(r._id)
                    }
                  )
                },
              },
              {
                key: 'tags',
                get: function() {
                  var e = this
                  return this.radioSelect || this.simpleSelect
                    ? this.currentChecked
                      ? [this.getNodeById(this.currentChecked)]
                      : []
                    : Je.getNodesMatching(this.tree, function(t, n, r) {
                        return (
                          t.checked &&
                            !e.hierarchical &&
                            Je.markSubTreeVisited(t, r, function(t) {
                              return e.getNodeById(t)
                            }),
                          t.checked
                        )
                      })
                },
              },
            ]),
            e
          )
        })(),
        yt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        gt = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      /*!
       * React Dropdown Tree Select
       * A lightweight, fast and highly customizable tree select component.
       * Hrusikesh Panda <hrusikesh.panda@dowjones.com>
       * Copyright (c) 2017 Dow Jones, Inc. <support@dowjones.com> (http://dowjones.com)
       * license MIT
       * see https://github.com/dowjones/react-dropdown-tree-select
       */
      var vt = l.a.bind(I.a),
        mt = (function(e) {
          function t(e) {
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t)
            var n = (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
            return (
              (n.initNewProps = function(e) {
                var t = e.data,
                  r = e.customOptions,
                  o = e.mode,
                  a = e.showDropdown,
                  i = e.showPartiallySelected,
                  l = e.searchPredicate
                n.treeManager = new bt({
                  data: t,
                  mode: o,
                  showPartiallySelected: i,
                  rootPrefixId: n.clientId,
                  searchPredicate: l,
                })
                var s = n.state.currentFocus && n.treeManager.getNodeById(n.state.currentFocus)
                s && (s._focused = !0),
                  n.setState(function(e) {
                    return yt(
                      { showDropdown: /initial|always/.test(a) || !0 === e.showDropdown, customOptions: r },
                      n.treeManager.getTreeAndTags()
                    )
                  })
              }),
              (n.resetSearchState = function() {
                return (
                  (n.searchInput.value = ''),
                  { tree: n.treeManager.restoreNodes(), searchModeOn: !1, allNodesHidden: !1 }
                )
              }),
              (n.handleClick = function(e, t) {
                n.setState(function(e) {
                  var t = 'always' === n.props.showDropdown || n.keepDropdownActive || !e.showDropdown
                  return (
                    t !== e.showDropdown &&
                      (t
                        ? document.addEventListener('click', n.handleOutsideClick, !1)
                        : document.removeEventListener('click', n.handleOutsideClick, !1)),
                    t ? n.props.onFocus() : n.props.onBlur(),
                    t ? { showDropdown: t } : yt({ showDropdown: t }, n.resetSearchState())
                  )
                }, t)
              }),
              (n.handleOutsideClick = function(e) {
                'always' !== n.props.showDropdown && f(e, n.node) && n.handleClick()
              }),
              (n.onInputChange = function(e) {
                var t = n.treeManager.filterTree(e, n.props.keepTreeOnSearch, n.props.keepChildrenOnSearch),
                  r = t.allNodesHidden,
                  o = t.tree,
                  a = e.trim().length > 0
                n.setState({ tree: o, searchModeOn: a, allNodesHidden: r, searchTerm: e })
              }),
              (n.onTagRemove = function(e, t) {
                var r = n.state.tags
                n.onCheckboxChange(e, !1, function(o) {
                  t && dt.getNextFocusAfterTagDelete(e, r, o, n.searchInput).focus()
                })
              }),
              (n.onCustomOptionRemove = function(e) {
                var t = n.state.customOptions.filter(function(t, n) {
                  return t !== e
                })
                n.setState({ customOptions: t }, n.onCustomChangeCallback(t))
              }),
              (n.onCustomOptionCreate = function(e) {
                var t = n.state.customOptions,
                  r = [].concat(
                    (function(e) {
                      if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
                        return n
                      }
                      return Array.from(e)
                    })(t || []),
                    [e]
                  )
                n.setState(yt({ customOptions: r }, n.resetSearchState()), n.onCustomChangeCallback(r))
              }),
              (n.onCustomChangeCallback = function(e) {
                ;(0, n.props.onCustomOptionChange)(e)
              }),
              (n.clearSearch = function() {
                n.setState(yt({}, n.resetSearchState()))
              }),
              (n.prepareTagData = function(e, t) {
                return e.map(function(e) {
                  var n = e._parent,
                    r = n ? t.getNodeById(n) : null
                  return (e.parentLabel = r ? r.label : null), e
                })
              }),
              (n.onNodeToggle = function(e) {
                n.treeManager.toggleNodeExpandState(e)
                var t = n.state.searchModeOn ? n.treeManager.matchTree : n.treeManager.tree
                n.setState({ tree: t }),
                  'function' == typeof n.props.onNodeToggle && n.props.onNodeToggle(n.treeManager.getNodeById(e))
              }),
              (n.onCheckboxChange = function(e, t, r) {
                var o = n.props,
                  a = o.mode,
                  i = o.keepOpenOnSelect
                n.treeManager.setNodeCheckedState(e, t)
                var l = n.treeManager.tags,
                  s = ['simpleSelect', 'radioSelect'].indexOf(a) > -1,
                  c = !(s && !i) && n.state.showDropdown
                l.length || (n.treeManager.restoreDefaultValues(), (l = n.treeManager.tags))
                var u = {
                  tree: n.state.searchModeOn ? n.treeManager.matchTree : n.treeManager.tree,
                  tags: l,
                  showDropdown: c,
                }
                ;((s && !c) || n.props.clearSearchOnChange) && Object.assign(u, n.resetSearchState()),
                  s && !c && document.removeEventListener('click', n.handleOutsideClick, !1),
                  n.setState(u, function() {
                    r && r(l)
                  })
                var p = n.prepareTagData(l, n.treeManager)
                n.props.onChange(n.treeManager.getNodeById(e), l, p)
              }),
              (n.onAction = function(e, t) {
                n.props.onAction(n.treeManager.getNodeById(e), t)
              }),
              (n.onInputFocus = function() {
                n.keepDropdownActive = !0
              }),
              (n.onInputBlur = function() {
                n.keepDropdownActive = !1
              }),
              (n.onTrigger = function(e) {
                n.handleClick(e, function() {
                  n.state.showDropdown && n.searchInput.focus()
                })
              }),
              (n.onKeyboardKeyDown = function(e) {
                var t = n.props.allowCustomOptions,
                  r = n.searchInput.value.trim()
                t &&
                  'Enter' === e.key &&
                  r.length > 1 &&
                  (e.preventDefault(), n.onCustomOptionCreate(n.searchInput.value))
              }),
              (n.onTreeNavKeyDown = function(e) {
                var t = n.props,
                  r = t.readOnly,
                  o = t.mode,
                  a = n.state,
                  i = a.showDropdown,
                  l = a.searchModeOn,
                  s = a.currentFocus,
                  c = n.treeManager,
                  u = l ? c.matchTree : c.tree
                if (!i || !dt.isValidKey(e.key, !0))
                  return i && ['Escape', 'Tab'].indexOf(e.key) > -1
                    ? void ('simpleSelect' === o && u.has(s)
                        ? n.onCheckboxChange(s, !0)
                        : ((n.keepDropdownActive = !1), n.handleClick()))
                    : void 0
                var p = c.handleNavigationKey(s, u, e.key, r, !l, n.onCheckboxChange, n.onNodeToggle)
                p !== s && n.setState({ currentFocus: p }), e.preventDefault()
              }),
              (n.getAriaAttributes = function() {
                var e = n.props,
                  t = e.mode,
                  r = e.texts
                return 'radioSelect' !== t ? {} : yt({ role: 'radiogroup' }, m(r.label))
              }),
              (n.state = { searchModeOn: !1, currentFocus: void 0, searchTerm: null }),
              (n.clientId = e.id || y.get(n)),
              (n.onCustomOptionRemove = n.onCustomOptionRemove.bind(n)),
              (n.onCustomOptionCreate = n.onCustomOptionCreate.bind(n)),
              (n.clearSearch = n.clearSearch.bind(n)),
              n
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, u['Component']),
            gt(t, [
              {
                key: 'componentWillMount',
                value: function() {
                  this.initNewProps(this.props)
                },
              },
              {
                key: 'componentDidMount',
                value: function() {
                  this.props.focusSearchInputOnMount && this.searchInput.focus()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener('click', this.handleOutsideClick, !1)
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function(e) {
                  this.initNewProps(e)
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.props,
                    n = t.disabled,
                    r = t.readOnly,
                    o = t.mode,
                    a = t.texts,
                    i = t.allowCustomOptions,
                    l = t.onTagUpdate,
                    s = t.disableParentSelect,
                    c = t.customOptionsPlaceholder,
                    u = this.state,
                    h = u.showDropdown,
                    d = u.currentFocus,
                    f = u.tags,
                    b = u.customOptions,
                    y = u.searchModeOn,
                    g = u.searchTerm,
                    v = i && y,
                    m = {
                      disabled: n,
                      readOnly: r,
                      activeDescendant: d ? d + '_li' : void 0,
                      texts: a,
                      mode: o,
                      clientId: this.clientId,
                    }
                  return p.a.createElement(
                    'div',
                    {
                      id: this.clientId,
                      className: vt(this.props.className, 'react-dropdown-tree-select'),
                      ref: function(t) {
                        e.node = t
                      },
                    },
                    p.a.createElement(
                      'div',
                      {
                        className: vt(
                          'dropdown',
                          { 'simple-select': 'simpleSelect' === o },
                          { 'radio-select': 'radioSelect' === o }
                        ),
                      },
                      p.a.createElement(
                        'div',
                        { className: 'tag-container' },
                        p.a.createElement(
                          Me,
                          yt(
                            { tags: f, onTagUpdate: l, onTagRemove: this.onTagRemove, treeManager: this.treeManager },
                            m
                          )
                        ),
                        i &&
                          p.a.createElement(Be, {
                            tags: f,
                            customOptions: b,
                            onCustomOptionRemove: this.onCustomOptionRemove,
                            customOptionsPlaceholder: c,
                          })
                      ),
                      p.a.createElement(
                        'div',
                        { className: 'bulk-select-body' },
                        p.a.createElement(
                          'div',
                          { className: 'search-with-options', tabIndex: '0' },
                          p.a.createElement(
                            V,
                            yt({ onTrigger: this.onTrigger, showDropdown: h }, m, { tags: f }),
                            p.a.createElement(
                              T,
                              yt(
                                {
                                  inputRef: function(t) {
                                    e.searchInput = t
                                  },
                                  tags: f,
                                  onInputChange: this.onInputChange,
                                  onFocus: this.onInputFocus,
                                  onBlur: this.onInputBlur,
                                  onKeyDown: this.onKeyboardKeyDown,
                                  clearSearch: this.clearSearch,
                                  searchModeOn: y,
                                },
                                m
                              )
                            )
                          ),
                          v && p.a.createElement(Ye, { searchTerm: g, onCustomOptionCreate: this.onCustomOptionCreate })
                        ),
                        h &&
                          p.a.createElement(
                            'div',
                            yt(
                              { className: 'dropdown-content', tabIndex: '0', onKeyDown: this.onTreeNavKeyDown },
                              this.getAriaAttributes()
                            ),
                            this.state.allNodesHidden
                              ? p.a.createElement(
                                  'span',
                                  { className: 'no-matches' },
                                  a.noMatches || 'No matches found'
                                )
                              : p.a.createElement(
                                  Ne,
                                  yt(
                                    {
                                      data: this.state.tree,
                                      keepTreeOnSearch: this.props.keepTreeOnSearch,
                                      keepChildrenOnSearch: this.props.keepChildrenOnSearch,
                                      searchModeOn: this.state.searchModeOn,
                                      onAction: this.onAction,
                                      onCheckboxChange: this.onCheckboxChange,
                                      onNodeToggle: this.onNodeToggle,
                                      mode: o,
                                      showPartiallySelected: this.props.showPartiallySelected,
                                      customOptions: b,
                                      onCustomOptionRemove: this.onCustomOptionRemove,
                                      onCustomOptionCreate: this.onCustomOptionCreate,
                                      disableParentSelect: s,
                                    },
                                    m
                                  )
                                )
                          )
                      )
                    )
                  )
                },
              },
            ]),
            t
          )
        })()
      ;(mt.propTypes = {
        data: c.a.oneOfType([c.a.object, c.a.array]).isRequired,
        allowCustomOptions: c.a.bool,
        customOptions: c.a.array,
        clearSearchOnChange: c.a.bool,
        keepTreeOnSearch: c.a.bool,
        keepChildrenOnSearch: c.a.bool,
        keepOpenOnSelect: c.a.bool,
        texts: c.a.shape({
          placeholder: c.a.string,
          noMatches: c.a.string,
          label: c.a.string,
          labelRemove: c.a.string,
        }),
        showDropdown: c.a.oneOf(['default', 'initial', 'always']),
        className: c.a.string,
        onChange: c.a.func,
        onAction: c.a.func,
        onNodeToggle: c.a.func,
        onFocus: c.a.func,
        onBlur: c.a.func,
        mode: c.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: c.a.bool,
        disabled: c.a.bool,
        readOnly: c.a.bool,
        id: c.a.string,
        searchPredicate: c.a.func,
        onCustomOptionChange: c.a.func,
        onTagUpdate: c.a.func,
        focusSearchInputOnMount: c.a.bool,
        disableParentSelect: c.a.bool,
        customOptionsPlaceholder: c.a.func,
      }),
        (mt.defaultProps = {
          onFocus: function() {},
          onBlur: function() {},
          onChange: function() {},
          texts: {},
          showDropdown: 'default',
        })
      t.default = mt
    },
  ])
})
//# sourceMappingURL=react-dropdown-tree-select.js.map
