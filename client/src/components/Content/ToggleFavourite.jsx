import axios from "axios"

const ToggleFavourite = (id, setMunros, munros, selectedMunro, setSelectedMunro) => {
    const url = `http://localhost:3001/munros/${id}`
    const munroToUpdate = munros.find(m => m.id === id)
    const updatedMunro = {...munroToUpdate, favourite: !munroToUpdate.favourite}

    axios.put(url, updatedMunro)
    .then(response => {
        const updatedMunros = munros.map(m => m.id !== id ? m : response.data)
        setMunros(updatedMunros)
        if (selectedMunro && selectedMunro.id === id) {
        setSelectedMunro(response.data);
        }
    })
    .catch(error => {
        console.error('Error updating favouriteness of munro', error)
    })
}

export default ToggleFavourite