import { mount } from 'enzyme'
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

            wrapper = mount(<Component />)
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

    it('re-runs the effect when bits change', () => {
        act(() => {
            fn = jest.fn()

            let random = Math.random()

            const Component = () => {
                useHourlyEffect(() => {
                    fn()
                }, [random])

                return null
            }

            wrapper = mount(<Component />)

            random = Math.random()

            wrapper.setProps({
                test: true,
            })
        })

        expect(fn).toHaveBeenCalledTimes(2)
    })

    it('does not re-run the effect when bits do not change', () => {
        act(() => {
            fn = jest.fn()

            const random = Math.random()

            const Component = () => {
                useHourlyEffect(() => {
                    fn()
                }, [random])

                return null
            }

            const wrapper = mount(<Component />)

            wrapper.setProps({
                test: true,
            })
        })

        expect(fn).toHaveBeenCalledTimes(1)
    })
})
