import UserLayout from "@/layouts/UserLayout";

export default function Subscriptions() {
    return (
        <UserLayout>
            <div className="flex items-center justify-between mt-32 ">
                <div>
                    <h1 className="font-extrabold">
                        Subscriptions
                    </h1>
                    <p className="mt-3">Your Subscriptions</p>
                </div>
                <div>
                    <h3>Mohid Meer</h3>
                </div>

            </div>


        </UserLayout>
    );
}


export async function getServerSideProps(){

    return {
        notFound: true,
    };

}