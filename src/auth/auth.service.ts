import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string, 
    password: string
  ): Promise<{ id: string, email: string, role: string, access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);

    if (user?.password !== password) {
      throw new UnauthorizedException('Email or password is incorrect');
    }

    const payload = { sub: user.id, email: user.email };

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(name: string, email: string, password: string): Promise<{ id: string, email: string, role: string, access_token: string }> {
    const user = await this.usersService.create({ name, email, password });

    const payload = { sub: user.id, email: user.email };

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}