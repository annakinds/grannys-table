const Bill = ({ chosenMenu }) => {

    return (
        <div className="bill">
            <h2 className="bill__title">The bill</h2>
            <div className="bill__overview">
                <p>€{chosenMenu}</p>
            </div>
        </div>
    );
}

export default Bill;
