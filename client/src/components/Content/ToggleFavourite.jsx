import munroService from '../../services/munros';

const ToggleFavourite = (id, setMunros, munros, selectedMunro, setSelectedMunro) => {
    const munroToUpdate = munros.find(m => m.id === id);
    if (!munroToUpdate) {
        console.error('Munro not found');
        return;
    }

    const updatedMunro = { ...munroToUpdate, favourite: !munroToUpdate.favourite };

    munroService.update(id, updatedMunro)
        .then(updatedMunro => {
            const updatedMunros = munros.map(m => m.id !== id ? m : updatedMunro);
            setMunros(updatedMunros);

            if (selectedMunro && selectedMunro.id === id) {
                setSelectedMunro(updatedMunro);
            }
        })
        .catch(error => {
            console.error('Error updating favouriteness of munro', error);
        });
};

export default ToggleFavourite;
