import React from 'react';

const PriceTable = () => {
    return (
        <div>
            <section className="container bg-light pb-5 mb-5">
                <h2 className="display-5 text-center pb-5">
                    <span>Product Price </span>
                    <span className="orange-text">List</span>
                </h2>

                <table className="table table-striped table-hover border">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Model</th>
                            <th scope="col">Speed</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lexus LFA</td>
                            <td>202 mph</td>
                            <td>$27000000</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Lexus ES. 4.8/5.</td>
                            <td>149 mph</td>
                            <td>$56650000</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Lexus LC-Hybrid</td>
                            <td>160 mph</td>
                            <td>$39750000</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Lexus LF-30 electrified</td>
                            <td>145 mph</td>
                            <td>$8070000</td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>Lexus LC convertible</td>
                            <td>195 mph</td>
                            <td>$10100000</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default PriceTable;