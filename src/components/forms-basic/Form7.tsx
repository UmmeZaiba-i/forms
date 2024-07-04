// Checkboxes:
// Create a form with multiple checkboxes.
// Display the selected checkbox values below the form.

import {useState} from 'react'

export default function Form7() {
    const [selectedOption, setSelectedOption]= useState<string[]>([]);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const{value, checked} = e.target;

        setSelectedOption(prev =>
            checked ? [...prev, value] : prev.filter(option => option !== value)
          );    
    }
    return (
        <div>
            <form >
                <label>Checkbox 1</label>
                <input
                    type="checkbox"
                    name="checkbox1"
                    value="checkbox1"
                    checked={selectedOption.includes('checkbox1') }
                    onChange={handleChange}
                /> <br />
                <label>Checkbox 2</label>
                <input
                    type="checkbox"
                    name="checkbox2"
                    value="checkbox2"
                    checked={ selectedOption.includes('checkbox2')}
                    onChange={handleChange}
                /> <br />
                <label>Checkbox 3</label>
                <input
                    type="checkbox"
                    name="checkbox3"
                    value="checkbox3"
                    checked={selectedOption.includes('checkbox3') }
                    onChange={handleChange}
                /> <br />
            </form>
            <div>
                {
                    selectedOption.map((option)=>{
                        return <p key={option}>{option}</p>
                    })
                }

            </div>
        </div>
    )
}

