import {deleteElement} from "../actions/actionsForTree";

export const treeModule = {
    state: () => ({
        tree: [
            {
                id: 1,
                name: "Dir 1",
                type: 'dir.jpg',
                children: [
                    {
                        id: 2,
                        name: "Dir 1-1",
                        type: 'dir.jpg',

                        children: [
                            {
                                id: 3,
                                name: "File 1-1-1",
                                type: "file.png"
                            },
                            {
                                id: 4,
                                name: "File 1-1-2",
                                type: "file.png"
                            }
                        ],
                    }, {
                        id: 5,
                        name: "File 1-2",
                        type: "file.png"
                    }

                ],
            },
            {
                id: 6,
                name: "Dir 2",
                type: 'dir.jpg',

                children: [
                    {
                        id: 7,
                        name: "Dir 2-1",
                        type: 'dir.jpg',
                        children: [
                            {
                                id: 8,
                                name: "File 2-2",
                                type: "file.png"
                            }
                        ]
                    }, {
                        id: 9,
                        name: "File 2",
                        type: "file.png"
                    },
                ],
            },
        ],
    }),
    actions: {
        deleteItem({state}, id) {
            deleteElement(state, id)
        },
    },
    namespaced: true
};
