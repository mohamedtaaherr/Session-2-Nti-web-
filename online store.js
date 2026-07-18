function processOrders(orders) {
    let totalRevenue = 0;
    let successfulOrders = 0;
    let processedCount = 0;
    let consecutiveSkips = 0;
    let stockFailures = 0;

    for (const order of orders) {
        processedCount++;


        if (order.status !== "valid" || !order.stockAvailable) {
            consecutiveSkips++;

            if (!order.stockAvailable) {
                stockFailures++;
            }

            // Stop condition
            if (consecutiveSkips === 3 || stockFailures === 3) {
                return {
                    totalRevenue,
                    successfulOrders,
                    processedCount,
                    stopMessage: "System stopped due to critical failure"
                };
            }

            continue;
        }

 
        totalRevenue += order.amount;
        successfulOrders++;
        consecutiveSkips = 0; // reset
    }

    return {
        totalRevenue,
        successfulOrders,
        processedCount
    };
}