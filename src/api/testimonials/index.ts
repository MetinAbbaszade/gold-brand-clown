import { testimonials } from "@/store/testimonials";

export const getAllTestimonials = async () => {
	if (!testimonials) {
		return null;
	}
	return testimonials;
};
