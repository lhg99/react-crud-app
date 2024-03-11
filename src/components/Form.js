import React from 'react';

const Form = ({handleSubmit, value, setValue, price, setPrice}) => {

    const handleChange = (e) => {
        console.log(e);
        setValue(e.target.value);
    };

    const handleChangePr = (e) => {
        console.log(e);
        setPrice(e.target.price);
    };

    return (
    <form onSubmit={handleSubmit} className="flex pt-2">
        <input type="text" name='value'
            className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                placeholder="예) 렌트비"
                value={value}
                onChange={handleChange} />

        <input type="text" name='price'
            className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                placeholder="0"
                price={price}
                onChange={handleChangePr} />

        <input type="submit"
            value="제출"
            className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
            style={{ flex: '1' }} />
    </form>
    )
}

export default Form
