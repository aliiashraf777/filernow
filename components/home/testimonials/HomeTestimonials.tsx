import TestimonialsCarousel from "@/components/common/testimonials/TestimonialsCarousel"
import { homeTestimonialsData } from "@/data/appData"

const HomeTestimonials = () => {
    return (
        <TestimonialsCarousel
            testimonials={homeTestimonialsData}
        />
    )
}
export default HomeTestimonials