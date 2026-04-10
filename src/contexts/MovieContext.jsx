import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    // Initialize state from localStorage immediately
    const [nextWatch, setNextWatch] = useState(() => {
        try {
            const storedNextWatch = localStorage.getItem("nextWatch")
            return storedNextWatch ? JSON.parse(storedNextWatch) : []
        } catch (error) {
            console.error("Error loading from localStorage:", error)
            return []
        }
    })

    // Save to localStorage whenever nextWatch changes
    useEffect(() => {
        try {
            localStorage.setItem('nextWatch', JSON.stringify(nextWatch))
        } catch (error) {
            console.error("Error saving to localStorage:", error)
        }
    }, [nextWatch])

    const addToNextWatch = (movie) => {
        setNextWatch(prev => {
            const exists = prev.some(m => m.id === movie.id)
            if (exists) return prev
            return [...prev, movie]
        })
    }

    const removeFromNextWatch = (movieId) => {
        setNextWatch(prev => prev.filter(movie => movie.id !== movieId))
    }

    const clearNextWatch = () => {
        setNextWatch([])
    }
    
    const isInNextWatch = (movieId) => {
        return nextWatch.some(movie => movie.id === movieId)
    }

    const value = {
        nextWatch,
        addToNextWatch,
        removeFromNextWatch,
        clearNextWatch,
        isInNextWatch
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}