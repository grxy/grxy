import { render as r } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'

import useHourlyEffect from './useHourlyEffect'

describe('useHourlyEffect', () => {
    let fn, wrapper

    beforeEach(() => {
        act(() => {
            fn = jest.fn()

            jest.useFakeTimers()

            const Component = () => {
                useHourlyEffect(() => {
                    fn()
                })

                return null
            }

            wrapper = r(<Component />)
        })
    })

    it('runs the effect on mount', () => {
        expect(fn).toHaveBeenCalled()
    })

    it('runs the effect on the hour', () => {
        act(() => {
            jest.runTimersToTime(36e5)

            expect(fn).toHaveBeenCalledTimes(2)

            jest.runTimersToTime(36e5)

            expect(fn).toHaveBeenCalledTimes(3)
        })
    })

    it('re-runs the effect when inputs change', () => {
        act(() => {
            fn = jest.fn()

            const Component = () => {
                useHourlyEffect(() => {
                    fn()
                }, [Math.random()])

                return null
            }

            wrapper = r(<Component />)
            wrapper.rerender(<Component test />)
        })

        expect(fn).toHaveBeenCalledTimes(2)
    })

    it('does not re-run the effect when inputs do not change', () => {
        act(() => {
            fn = jest.fn()

            const random = Math.random()

            const Component = () => {
                useHourlyEffect(() => {
                    fn()
                }, [random])

                return null
            }

            wrapper = r(<Component />)
            wrapper.rerender()
        })

        expect(fn).toHaveBeenCalledTimes(1)
    })
})
