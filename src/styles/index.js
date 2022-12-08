import { useEffect } from "react"
import { connect, useSelector } from "react-redux"



const defColors = {

    primary: '#02b075',
    secondary: '#F21170',

    warning: '#FA9905',
    success: '#02b075',
    danger: '#FF0000',

    // dark
    primaryDark: '#009663',
    fontColor: '#333',

}

/**
 * light mode colors
 */
const light = {
    ...defColors,

    bgLight: '#e1e1e1',
    bgLight2: '#f1f1f1',
    bgDark: '#FFF',
    fontColor: '#2f2f2f',

    // input
    bgInput: '#FFF',
    labelColor: '#444'
}


/**
 * dark mode colors
 */
const dark = {
    ...defColors,

    bgLight: '#111',
    bgLight2: '#333',
    bgDark: '#222',
    fontColor: '#DDD',

    // input
    bgInput: '#333',
    labelColor: '#fff'
}

function useStyle () {

    const selector = useSelector(state => state.theme)
    const mode = selector.mode

    let result = light
    
    if (mode == 'dark') {
        result = dark
    }

    result.mode = mode
    return result
}

export default useStyle