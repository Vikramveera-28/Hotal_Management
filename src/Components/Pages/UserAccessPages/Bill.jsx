import React from "react";
import '../../../App.css';
import '../../../Bootsrap/css/bootstrap.min.css';

export const Bill = ({ userLoginData, game, restaurant, laundary, fetchError }) => {
    const userName = userLoginData[0]?.name;

    // Helper function to count occurrences of specific items in a list
    const countItems = (list, key, value) => list.filter(item => item[key] === value).length;

    // Filter the lists based on the user name
    const userGameList = game.filter(user => user.user === userName);
    const userRestaurantList = restaurant.filter(user => user.user === userName);
    const userLaundaryList = laundary.filter(user => user.user === userName);

    // Get unique game, restaurant, and laundry price objects
    const uniqueGamePrice = userGameList
        .map(item => ({ gname: item.gname, grate: item.grate })) // Map to {gname, grate}
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.gname === value.gname && t.grate === value.grate
            ))
        );

    const uniqueRestaurantPrice = userRestaurantList
        .map(item => ({ ritem: item.ritem, rrate: item.rrate })) // Map to {ritem, rrate}
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.ritem === value.ritem && t.rrate === value.rrate
            ))
        );

    const uniqueLaundaryPrice = userLaundaryList
        .map(item => ({ litem: item.litem, lrate: item.lrate })) // Map to {litem, lrate}
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.litem === value.litem && t.lrate === value.lrate
            ))
        );
    // Calculate total price for restaurant items
    const totalRestaurantCost = uniqueRestaurantPrice.reduce((total, item) => {
        const quantity = countItems(userRestaurantList, 'ritem', item.ritem);
        return total + (quantity * item.rrate);
    }, 0);  // Start from 0
    // Calculate total price for laundary items
    const totalLaundaryCost = uniqueLaundaryPrice.reduce((total, item) => {
        const quantity = countItems(userLaundaryList, 'litem', item.litem);
        return total + (quantity * item.lrate);
    }, 0);  // Start from 0
    // Calculate total price for laundary items
    const totalGameCost = uniqueGamePrice.reduce((total, item) => {
        const quantity = countItems(userGameList, 'gname', item.gname);
        return total + (quantity * item.grate);
    }, 0);  // Start from 0

    const roomRent = 5000;
    const roomService = 500;
    const gst = 300;

    const totalBill = roomRent + totalRestaurantCost + totalLaundaryCost + totalGameCost + roomService + gst

    return (
        <main className="container">
            <h3 className="text-secondary border-bottom border-2 border-primary-subtle w-100 pb-2 mt-3 ps-2">{userName}'s Bill Page</h3>

            <div className="mt-5">
                <h2 className="text-dark my-2">Restaurant</h2>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Sl. No</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render Restaurant Items */}
                        {uniqueRestaurantPrice.map((item, index) => {
                            const quantity = countItems(userRestaurantList, 'ritem', item.ritem);
                            const total = quantity * item.rrate;
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.ritem}</td>
                                    <td>{quantity}</td>
                                    <td>{item.rrate}</td>
                                    <td>{total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className="table-secondary">
                    {fetchError && <tr><td colSpan='5' className="text-center text-danger h4">{`Error: ${fetchError}`}</td></tr>}
                        <tr>
                            <td colSpan="4" className="text-end"><strong>Total:</strong></td>
                            <td><strong>{totalRestaurantCost}</strong></td>
                        </tr>
                    </tfoot>
                </table>
                <h2 className="text-dark my-2">Laundary</h2>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Sl. No</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render Restaurant Items */}
                        {uniqueLaundaryPrice.map((item, index) => {
                            const quantity = countItems(userLaundaryList, 'litem', item.litem);
                            const total = quantity * item.lrate;
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.litem}</td>
                                    <td>{quantity}</td>
                                    <td>{item.lrate}</td>
                                    <td>{total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className="table-secondary">
                    {fetchError && <tr><td colSpan='5' className="text-center text-danger h4">{`Error: ${fetchError}`}</td></tr>}
                        <tr>
                            <td colSpan="4" className="text-end"><strong>Total:</strong></td>
                            <td><strong>{totalLaundaryCost}</strong></td>
                        </tr>
                    </tfoot>
                </table>
                <h2 className="text-dark my-2">Games</h2>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Sl. No</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Rate</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render Restaurant Items */}
                        {uniqueGamePrice.map((item, index) => {
                            const quantity = countItems(userGameList, 'gname', item.gname);
                            const total = quantity * item.grate;
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.gname}</td>
                                    <td>{quantity}</td>
                                    <td>{item.grate}</td>
                                    <td>{total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className="table-secondary">
                    {fetchError && <tr><td colSpan='5' className="text-center text-danger h4">{`Error: ${fetchError}`}</td></tr>}
                        <tr>
                            <td colSpan="4" className="text-end"><strong>Total:</strong></td>
                            <td><strong>{totalGameCost}</strong></td>
                        </tr>
                    </tfoot>
                </table>
                <h2 className="text-dark my-2">Total Bill</h2>
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Sl.No</th>
                            <th>Services</th>
                            <th>Costs</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Room Rent</td>
                            <td>5000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Food</td>
                            <td>{totalRestaurantCost}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Laundary</td>
                            <td>{totalLaundaryCost}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Games</td>
                            <td>{totalGameCost}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Room Service</td>
                            <td>{roomService}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>GST</td>
                            <td>{gst}</td>
                        </tr>
                    </tbody>
                    <tfoot className="table-secondary">
                        <tr>
                            <th colSpan="2" className="text-end">Total:</th>
                            <th>{totalBill}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    );
};