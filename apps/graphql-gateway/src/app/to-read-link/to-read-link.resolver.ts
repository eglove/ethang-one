import { Resolver } from "@nestjs/graphql";
import { ToReadLinkService } from "./to-read-link.service";

@Resolver()
export class ToReadLinkResolver {
  constructor(private readonly toReadLinkService: ToReadLinkService) {}
}
