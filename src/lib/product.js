export default function getProduct() {
    return new Promise( resolve => {
        setTimeout(()=> {
          resolve(producto)
        }, 3000);
    });
}

const producto = {
    id: "664253892-7",
    name: "DualShock 4 Wireless Controller for PlayStation 4 - Magma Red",
    price: "US$ 64.99",
    color: "Magma Red",
    description: "The DualShock 4 Wireless Controller features familiar controls, and incorporates several innovative features to usher in a new era of interactive experiences. Its definitive analog sticks and trigger buttons have been improved for greater feel and sensitivity. A multi touch, clickable touch pad expands gameplay possibilities, while the incorporated light bar in conjunction with the PlayStation Camera allows for easy player identification and screen adjustment when playing with friends in the same room.",
    desExtra: `Buttons     PS button
    Share button
    Options button
    D Pad (up, down, right, left)
    Action buttons (triangle, circle, cross, square)
    Trigger buttons (R1, R2, L1, L2)
    Touch Pad button

    Touch Pad           2 point capacitive touch with click mechanism
    Motion Sensor     Six axis motion sensing systems (three axis gyroscope, three axis accelerometer)
    Ports                  1 x Micro USB
             1 x Extension port
             1 x Stereo headset jack
    Wireless Connectivity     Bluetooth 2.1+EDR`,
    stock: 30,
    img: "/static/media/control.c52361ef.jpg"
}