function Card({heading="Main Heading",someInfo}) {
    console.log(heading);
    console.log(someInfo);
    return (
        <div className="card-mack" style={{border: '2px solid black',padding: '8px',margin: '4px'}}>
            <h3 className="heading">{heading}</h3>
            <div className="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores cupiditate enim ducimus sint quaerat amet placeat optio perspiciatis cum, sapiente vel dolores voluptatem quae blanditiis velit ut ex recusandae eligendi!</div>
        </div>
    );
}

export default Card;