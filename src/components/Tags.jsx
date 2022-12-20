
function Tags({tags}) {
    return (
        <ul className="tag-values">
            {tags.map((tag) => (
                <li className="tag" key={tag}>{tag}</li>
            ))}
        </ul>
    );
}

export default Tags;