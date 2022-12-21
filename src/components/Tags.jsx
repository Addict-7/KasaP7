// 
function Tags({tags}) {
    return (
        <ul className="tag-values">
            {tags.map((tag, index) => (
                <li className="tag" key={index}>{tag}</li>
            ))}
        </ul>
    );
}

export default Tags;