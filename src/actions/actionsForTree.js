// Во время использования рекурсии внутри метода deleteElement при нажатии на кнопку 'Корзинка' программа падала.Поэтому
// написал новый отдельный метод deleteSubElement
export function deleteElement(state, id) {
    const idToDelete = id;

    state.tree = state.tree.filter((node) => {
        if (node.id === idToDelete) {
            // Удаляем текущий элемент по id и всех его детей
            return false;
        } else if (node.children) {
            // Вызываем функцию для удаления подэлементов по id
            node.children = deleteSubElement(node.children, idToDelete);
        }
        return true;
    });
}

//Написал метод deleteSubElement для удаления подэлементов по id
function deleteSubElement(nodes, idToDelete) {
    return nodes.filter((node) => {
        if (node.id === idToDelete) {
            // Удаляем текущий элемент по id и всех его детей
            return false;
        } else if (node.children) {
            // Рекурсивно вызываем эту функцию для удаления подэлементов по id
            node.children = deleteSubElement(node.children, idToDelete);
        }
        return true;
    });
}

