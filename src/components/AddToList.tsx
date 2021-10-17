import { useState } from "react";
import { IState as Props } from '../App';

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        image: "",
        note: ""
    });

    const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleAddToList = (): void => {
        if (!input.name || !input.age || !input.image) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                imageUrl: input.image,
                notes: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            image: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <input type="text" name="name" placeholder="Name" className="AddToList-input" value={input.name} onChange={handleOnChangeInput} />
            <input type="text" name="age" placeholder="Age" className="AddToList-input" value={input.age} onChange={handleOnChangeInput} />
            <input type="text" name="image" placeholder="Image Url" className="AddToList-input" value={input.image} onChange={handleOnChangeInput} />
            <textarea name="note" placeholder="Notes" className="AddToList-input" value={input.note} onChange={handleOnChangeInput} />
            <button className="AddToList-btn" onClick={handleAddToList}>
                Add to List
            </button>
        </div>
    );
};

export default AddToList;