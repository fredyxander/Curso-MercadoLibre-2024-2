import { fireEvent, render, waitFor, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import { PhotosList } from "../PhotosList";

const MOCK_PHOTOS = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
]

describe("Pruebas <PhotosList/>", ()=>{

    beforeEach(()=>{
        global.fetch = jest.fn();
    });

    afterEach(()=>{
        jest.resetAllMocks();
    });

    test.skip("Se renderiza el componente correctamente", ()=>{
        const { getByTestId } = render(<PhotosList/>);
        const title = getByTestId("title");
        expect(title).toHaveTextContent("Listado de fotos");
    });

    test.skip("findById", async()=>{
        const { findByTestId, getByTestId } = render(<PhotosList/>);
        const photosList = await findByTestId("photos-list");
        // const photosList = getByTestId("photos-list");
        expect(photosList).toBeInTheDocument();
    });

    test("waitFor", async()=>{
        const mockResponse = MOCK_PHOTOS;
        fetch.mockResolvedValueOnce({
            json: async ()=>mockResponse
        });
        const {getByTestId, queryByTestId} = render(<PhotosList/>)

        await waitFor(()=>{
            const photosList = getByTestId("photos-list");
            expect(photosList).toBeInTheDocument();
            const imageCard = getByTestId('image-card-4');
            const button = within(imageCard).getByTestId("remove-btn");
            fireEvent.click(button);
            expect(queryByTestId('image-card-4')).not.toBeInTheDocument();
        })
    });
})