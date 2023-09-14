import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function EcommerceCard(props) {
    return (
        <div className='p-[1%]'>
            

            <Card className="m-[2%] w-96 border-2 p-2 border-gray-300 shadow-lg animate__bounce" key={props.key}>
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                        src={props.img}
                        alt="card-image"
                        className="h-full w-[100%] object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="m-[2%]  flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium line-clamp-1">
                            {props.proName}
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            {props.price}
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="m-[2%] font-normal opacity-75 line-clamp-2"
                    >
                        {props.title}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="m-[2%]  text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

