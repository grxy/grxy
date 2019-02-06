import { useEffect } from 'react'

/**
 * This hook runs a side effect function on load and at the top of every hour
 *
 * @param {Function} effectFn an effect function
 * @param {Array} changedBits the changed bits to be passed to the underlying useEffect hook
 * @return {undefined}
 */
function useHourlyEffect(effectFn, changedBits) {
    let timeout, interval

    useEffect(() => {
        /**
         * The intent of the following code is to call the effectFn at the
         * top of every hour. I'm sure there are simpler ways to do this
         * using moment or date-fns, but I don't want to add a date lib
         * just yet.
         */
        const nextHour = new Date()
        nextHour.setHours(nextHour.getHours() + 1)
        nextHour.setMinutes(0)
        nextHour.setSeconds(0)
        nextHour.setMilliseconds(0)

        const timeoutMs = nextHour - Date.now()

        effectFn()

        timeout = setTimeout(() => {
            interval = setInterval(() => {
                effectFn()
            }, 36e5) // every 1 hour (3600s * 1000)

            effectFn()
        }, timeoutMs)

        return () => {
            clearTimeout(timeout)
            clearInterval(interval)
        }
    }, changedBits)
}

export default useHourlyEffect
