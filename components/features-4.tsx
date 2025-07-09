import { BarChart3, Users, Cloud, ShoppingCart, Phone, FileText } from 'lucide-react'

export default function FeatureFour() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-2xl font-medium lg:text-3xl">How Productico can improve your business…</h2>
                </div>

                <div className="relative mx-auto grid max-w-6xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="size-4" />
                            <h3 className="text-sm font-medium">Real-Time Analytics</h3>
                        </div>
                        <p className="text-sm">Access insightful analytics and reports in real-time to make data-driven decisions and monitor the health of your business.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Vendor and Supplier Management</h3>
                        </div>
                        <p className="text-sm">Optimize your supply chain by efficiently managing relationships with vendors and suppliers through integrated tools.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cloud className="size-4" />
                            <h3 className="text-sm font-medium">Cloud-Based Infrastructure</h3>
                        </div>
                        <p className="text-sm">Leverage the benefits of a cloud-based ERP solution, including scalability, accessibility, and reduced infrastructure costs.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <ShoppingCart className="size-4" />
                            <h3 className="text-sm font-medium">E-Commerce shop</h3>
                        </div>
                        <p className="text-sm">Unlock a world of convenience and setup your own customized e-commerce shop with minimal effort.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Phone className="size-4" />
                            <h3 className="text-sm font-medium">CRM</h3>
                        </div>
                        <p className="text-sm">Strengthen customer relationships with CRM functionalities that enhance lead management, sales processes, and customer interactions.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <FileText className="size-4" />
                            <h3 className="text-sm font-medium">Report Generation</h3>
                        </div>
                        <p className="text-sm">Try our one click report generation feature and share them with your team. Download and store them in excel or pdf format.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
