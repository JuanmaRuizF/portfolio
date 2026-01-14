import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, Send, Phone } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { socialLinks, contactEmail } from "@/data";
import { emailConfig } from "@/config/email";

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
	const { t } = useLanguage();
	const { toast } = useToast();
	const formRef = useRef<HTMLFormElement>(null);
	const [copied, setCopied] = useState(false);
	const [phoneCopied, setPhoneCopied] = useState(false);
	const [showEmailForm, setShowEmailForm] = useState(false);
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [sending, setSending] = useState(false);

	const phoneNumber = "+34 601 125 836";

	const handleCopyEmail = async () => {
		await navigator.clipboard.writeText(contactEmail);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleCopyPhone = async () => {
		await navigator.clipboard.writeText(phoneNumber.replace(/\s/g, ""));
		setPhoneCopied(true);
		setTimeout(() => setPhoneCopied(false), 2000);
	};

	const handleEmailClick = () => {
		setShowEmailForm(true);
	};

	const handleSendEmail = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formRef.current) {
			setSending(false);
			return;
		}

		try {
			await emailjs.sendForm(emailConfig.serviceId, emailConfig.templateId, formRef.current, emailConfig.publicKey);

			toast({
				title: t.contact.successTitle || "Message sent!",
				description: t.contact.successDescription || "Your message has been sent successfully.",
				duration: 3000,
			});

			setFormData({ name: "", email: "", message: "" });
			setShowEmailForm(false);
		} catch (error) {
			console.error("EmailJS Error:", error);
			toast({
				title: t.contact.errorTitle || "Error",
				description: t.contact.errorDescription || "Failed to send message. Please try again or use the email link.",
				variant: "destructive",
				duration: 5000,
			});
		} finally {
			setSending(false);
		}
	};

	const handleBack = () => {
		setShowEmailForm(false);
	};

	const contactMethods = [
		{
			icon: Github,
			label: "GitHub",
			value: socialLinks.github.replace("https://", ""),
			href: socialLinks.github,
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			value: socialLinks.linkedin.replace("https://www.", ""),
			href: socialLinks.linkedin,
		},
	];

	return (
		<Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
			<DialogContent className="max-w-lg p-0 gap-0 bg-card border-border/50 overflow-hidden">
				<DialogTitle className="sr-only">{t.contact.title}</DialogTitle>
				<DialogDescription className="sr-only">{t.contact.description}</DialogDescription>

				{/* Header */}
				<div className="relative p-8 pb-0">
					<div className="text-center">
						<h2 className="text-3xl font-display font-bold mb-2">
							<span className="text-neon">{t.contact.title}</span>
						</h2>
						<p className="text-muted-foreground text-sm">{t.contact.description}</p>
					</div>
				</div>

				{/* Content */}
				<div className="p-8 space-y-4">
					{showEmailForm ? (
						<motion.form
							ref={formRef}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							onSubmit={handleSendEmail}
							className="space-y-4"
						>
							<button
								type="button"
								onClick={handleBack}
								className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors mb-2"
							>
								<span className="text-xl">←</span>
								<span>{t.contact.back}</span>
							</button>
							<div>
								<Input
									name="from_name"
									placeholder={t.contact.namePlaceholder}
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="bg-secondary/30 border-border/50 focus:border-primary"
									required
								/>
							</div>
							<div>
								<Input
									name="reply_to"
									type="email"
									placeholder={t.contact.emailPlaceholder}
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className="bg-secondary/30 border-border/50 focus:border-primary"
									required
								/>
							</div>
							<div>
								<Textarea
									name="message"
									placeholder={t.contact.messagePlaceholder}
									value={formData.message}
									onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									className="bg-secondary/30 border-border/50 focus:border-primary min-h-[120px]"
									required
								/>
							</div>
							<Button
								type="submit"
								disabled={sending}
								className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
							>
								<Send className="h-4 w-4 mr-2" />
								{sending ? t.contact.sending : t.contact.send}
							</Button>
						</motion.form>
					) : (
						<>
							{/* Email method with form trigger and copy */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								className="group flex items-stretch gap-2 bg-secondary/30 border border-border/50 hover:border-primary/50 transition-all"
							>
								<button
									onClick={handleEmailClick}
									className="flex-1 flex items-center gap-4 p-4 hover:bg-primary/5 transition-all text-left"
								>
									<div className="p-3 bg-background border border-border/50 group-hover:border-primary/50 transition-colors">
										<Mail className="h-5 w-5 text-primary" />
									</div>
									<div className="flex-1 min-w-0">
										<p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-1">Email</p>
										<p className="text-sm text-foreground truncate">{contactEmail}</p>
									</div>
									<div className="flex items-center gap-1 text-xs font-mono text-primary">
										<Send className="h-3 w-3" />
										<span className="hidden sm:inline">{t.contact.send}</span>
									</div>
								</button>
								<button
									onClick={handleCopyEmail}
									className="px-4 border-l border-border/50 hover:bg-primary/5 transition-all flex items-center justify-center"
								>
									{copied ? (
										<Check className="h-4 w-4 text-primary" />
									) : (
										<Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
									)}
								</button>
							</motion.div>

							{/* Phone method with copy */}
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.1 }}
								className="group flex items-stretch gap-2 bg-secondary/30 border border-border/50 hover:border-primary/50 transition-all"
							>
								<a
									href={`tel:${phoneNumber.replace(/\s/g, "")}`}
									className="flex-1 flex items-center gap-4 p-4 hover:bg-primary/5 transition-all text-left"
								>
									<div className="p-3 bg-background border border-border/50 group-hover:border-primary/50 transition-colors">
										<Phone className="h-5 w-5 text-primary" />
									</div>
									<div className="flex-1 min-w-0">
										<p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-1">Phone</p>
										<p className="text-sm text-foreground truncate">{phoneNumber}</p>
									</div>
								</a>
								<button
									onClick={handleCopyPhone}
									className="px-4 border-l border-border/50 hover:bg-primary/5 transition-all flex items-center justify-center"
								>
									{phoneCopied ? (
										<Check className="h-4 w-4 text-primary" />
									) : (
										<Copy className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
									)}
								</button>
							</motion.div>

							{/* Other contact methods */}
							{contactMethods.map((method, index) => (
								<motion.div
									key={method.label}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: (index + 2) * 0.1 }}
									className="group"
								>
									<a
										href={method.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-4 p-4 bg-secondary/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
									>
										<div className="p-3 bg-background border border-border/50 group-hover:border-primary/50 transition-colors">
											<method.icon className="h-5 w-5 text-primary" />
										</div>
										<div className="flex-1 min-w-0">
											<p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mb-1">
												{method.label}
											</p>
											<p className="text-sm text-foreground truncate">{method.value}</p>
										</div>
									</a>
								</motion.div>
							))}
						</>
					)}
				</div>

				{/* Bottom decoration */}
				<div className="h-1 bg-gradient-to-r from-primary via-accent to-neon-orange" />
			</DialogContent>
		</Dialog>
	);
}
