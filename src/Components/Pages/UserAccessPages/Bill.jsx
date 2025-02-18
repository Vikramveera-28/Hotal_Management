import React from "react";
import '../../../App.css';

const Bill = ({ userLoggedData, game, restaurant, laundary, gameError, restaurantError, laundaryError}) => {
    const userName = userLoggedData[0]?.userName;
    
    // Help to get specific items in a list
    const countItems = (list, key, value) => list.filter(item => item[key] === value).length;

    // Get separate User
    const userGameList = game.filter(user => user.user === userName);
    const userRestaurantList = restaurant.filter(user => user.user === userName);
    const userLaundaryList = laundary.filter(user => user.user === userName);

    // Get unique game, restaurant, and laundry price objects
    const uniqueGamePrice = userGameList
        .map(item => ({ game: item.game, amount: item.amount }))
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.game === value.game && t.amount === value.amount
            ))
        );

    const uniqueRestaurantPrice = userRestaurantList
        .map(item => ({ food: item.food, amount: item.amount }))
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.food === value.food && t.amount === value.amount
            ))
        );

    const uniqueLaundaryPrice = userLaundaryList
        .map(item => ({ cloth: item.cloth, amount: item.amount }))
        .filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.cloth === value.cloth && t.amount === value.amount
            ))
        );

    // total price for restaurant, laundary, Games
    const totalRestaurantCost = uniqueRestaurantPrice.reduce((total, item) => {
        const quantity = countItems(userRestaurantList, 'food', item.food);
        return total + (quantity * item.amount);
    }, 0);
    
    const totalLaundaryCost = uniqueLaundaryPrice.reduce((total, item) => {
        const quantity = countItems(userLaundaryList, 'cloth', item.cloth);
        return total + (quantity * item.amount);
    }, 0);
    
    const totalGameCost = uniqueGamePrice.reduce((total, item) => {
        const quantity = countItems(userGameList, 'game', item.game);
        return total + (quantity * item.amount);
    }, 0);

    const roomRent = 5000;
    const roomService = 500;
    const gst = 300;

    const totalBill = roomRent + totalRestaurantCost + totalLaundaryCost + totalGameCost + roomService + gst

    return (
        <main className="container mt-2">
            <h3 className="text-secondary border-bottom border-2 border-primary-subtle w-100 pb-2 mt-3 ps-2 mt-5">{userName}'s Bill Page</h3>
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
                        {uniqueRestaurantPrice.map((item, index) => {
                            const quantity = countItems(userRestaurantList, 'food', item.food);
                            const total = quantity * item.amount;
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.food}</td>
                                    <td>{quantity}</td>
                                    <td>{item.amount}</td>
                                    <td>{total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className="table-secondary">
                    {!restaurantError && restaurant.length===0 && <tr><td colSpan='5' className="text-center text-danger h4">{`Your food order list is Empty`}</td></tr>}
                    {restaurantError && <tr><td colSpan='5' className="text-center text-danger h4">{`${restaurantError}`}</td></tr>}
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
                        {uniqueLaundaryPrice.map((item, index) => {
                            const quantity = countItems(userLaundaryList, 'cloth', item.cloth);
                            const total = quantity * item.amount;
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.cloth}</td>
                                    <td>{quantity}</td>
                                    <td>{item.amount}</td>
                                    <td>{total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className="table-secondary">
                    {!laundaryError && laundary.length===0 && <tr><td colSpan='5' className="text-center text-danger h4">{`Your cloth cleaning list is Empty`}</td></tr>}
                    {laundaryError && <tr><td colSpan='5' className="text-center text-danger h4">{`${laundaryError}`}</td></tr>}
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
                        {uniqueGamePrice.map((item, index) => {
                            const quantity = countItems(userGameList, 'game', item.game);
                            const total = quantity * item.amount;
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.game}</td>
                                    <td>{quantity}</td>
                                    <td>{item.amount}</td>
                                    <td>{total}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className="table-secondary">
                    {!gameError && game.length===0 && <tr><td colSpan='5' className="text-center text-danger h4">{`Your Game timing list is Empty`}</td></tr>}
                    {gameError && <tr><td colSpan='5' className="text-center text-danger h4">{`${gameError}`}</td></tr>}
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
                <button className="btn btn-primary w-100">Payment</button>
            </div>
        </main>
    );
};
export default Bill;