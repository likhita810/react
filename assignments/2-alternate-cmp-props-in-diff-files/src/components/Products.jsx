


export default function Products({image,category,info}) {
    // the arguments here should match with the properties in Products.jsx
    return (
        <>
        <li class="products">
            <br />
            {/* parameters passed here should be same as arguments passed in line 1 */}
            {/* so ultimately, all the names of properties, arguments and values should be same */}
            <strong>{category}</strong>
            <br /> 
            <img src={image} alt="image" width="150px" height="150px" class="products"/>
            <br />
            {info}
            {/* im directly calling the proerties instead of giving it as assigning to something else. */}
            <br /> 
        </li>
        </>
    )
}