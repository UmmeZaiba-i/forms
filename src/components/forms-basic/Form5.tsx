// Dropdown Select:
// Create a form with a dropdown select component.
// Populate the dropdown options dynamically from an array.

export default function Form5() {
    const items:string[] = ['Volvo', 'Mercedes', 'hehe']
  return (
    <div>
      <form>
        <label>Dropdown:</label>
        <select>
        {items.map((item)=>{
            return(
                <option key={item}>{item}</option>
            )
         })
        }
        </select>
      </form>
    </div>
  )
}
