import ImageContent from "@/app/components/ccrc/imagecontent";
import OrganogramTree from "../components/general/organogram";

export default function Organogram() {
    return (
        <>
            <ImageContent
                hasImage={false}
                readmore={false}
                className="items-center justify-center"
                title="Organogram of Kalinga University"
                subtitleclassName="hidden"
                description="Kalinga University follows a well-structured governance model to ensure smooth administration and institutional integrity. It begins with the Chancellor, followed by the Vice-Chancellor and Director General. Their roles and responsibilities are well-defined, enabling proper decision-making across all the departments of the university. "
            />
            <OrganogramTree />
        </>
    )
}