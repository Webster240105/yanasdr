let text3d = new Ztextify(
    "h2",
    {
        depth: "30px",
        layers: 10,
        fade: true,
        direction: "both",
        event: "pointer",
        eventRotation: "30deg"
    }
)

let img3d = new Ztextify(".image", {
    depth: "30px",
    layers: 10,
    fade: true,
    direction: "both",
    event: "pointer",
    eventRotation: "35deg",
    eventDirection: "reverse",
    perspective: "150px"

}
)

let img3d1 = new Ztextify(".photo",
    {
        depth: "30px",
        layers: 10,
        fade: false,
        direction: "both",
        event: "pointer",
        eventRotation: "45deg"
    }
)